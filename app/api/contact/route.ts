import { NextRequest } from "next/server";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || SMTP_USER;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, whatsapp, message } = body;

    const errors: Record<string, string> = {};
    if (!name?.trim()) errors.name = "Nome é obrigatório";
    if (!email?.trim()) errors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "E-mail inválido";
    if (!whatsapp?.trim()) errors.whatsapp = "WhatsApp é obrigatório";
    else if (!/^[\d\s\-\+\(\)]{8,}$/.test(whatsapp.replace(/\s/g, "")))
      errors.whatsapp = "Telefone inválido";
    if (!message?.trim()) errors.message = "Mensagem é obrigatória";

    if (Object.keys(errors).length > 0) {
      return Response.json({ success: false, errors }, { status: 400 });
    }

    const lead = {
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      source: request.headers.get("referer") || "direct",
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
          from: `"SpiderTech Lead" <${SMTP_USER}>`,
          to: NOTIFICATION_EMAIL,
          subject: `Novo lead: ${lead.name}`,
          html: `
            <h2>Novo lead do site SpiderTech</h2>
            <p><strong>Nome:</strong> ${lead.name}</p>
            <p><strong>E-mail:</strong> ${lead.email}</p>
            <p><strong>WhatsApp:</strong> ${lead.whatsapp}</p>
            <p><strong>Mensagem:</strong></p>
            <blockquote>${lead.message}</blockquote>
            <p><small>Recebido em ${lead.createdAt}</small></p>
          `,
        });
      } catch {
        console.log("[CONTACT] SMTP not configured or failed, lead logged");
      }
    } else {
      console.log("[CONTACT] Lead received:", JSON.stringify(lead, null, 2));
    }

    return Response.json({
      success: true,
      message: "Proposta recebida! Entraremos em contato em até 48 horas.",
    });
  } catch {
    return Response.json(
      { success: false, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
