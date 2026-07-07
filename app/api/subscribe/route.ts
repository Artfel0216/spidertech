import { NextRequest } from "next/server";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || SMTP_USER;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    const errors: Record<string, string> = {};
    if (!email?.trim()) errors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "E-mail inválido";

    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors }, { status: 400 });
    }

    const subscriber = {
      name: name?.trim() || "",
      email: email.trim(),
      createdAt: new Date().toISOString(),
      source: request.headers.get("referer") || "direct",
      type: "newsletter",
    };

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.default.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        await transporter.sendMail({
          from: `"SpiderTech" <${SMTP_USER}>`,
          to: NOTIFICATION_EMAIL,
          subject: `Novo inscrito: ${subscriber.email}`,
          html: `
            <h2>Novo inscrito na newsletter</h2>
            <p><strong>Nome:</strong> ${subscriber.name || "—"}</p>
            <p><strong>E-mail:</strong> ${subscriber.email}</p>
            <p><small>Inscrito em ${subscriber.createdAt}</small></p>
          `,
        });
      } catch {
        console.log("[SUBSCRIBE] SMTP not configured, subscriber logged");
      }
    } else {
      console.log("[SUBSCRIBE] New subscriber:", JSON.stringify(subscriber, null, 2));
    }

    return Response.json({
      success: true,
      message: "Inscrição confirmada! Você receberá nossos conteúdos por e-mail.",
    });
  } catch {
    return Response.json(
      { success: false, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
