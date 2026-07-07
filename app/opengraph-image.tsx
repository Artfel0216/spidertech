import { ImageResponse } from "next/og";

export const alt = "SpiderTech - Sistemas Sob Medida & Landing Pages que Convertem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-25%",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background: "rgba(56,189,248,0.15)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-50%",
            right: "-25%",
            width: "80%",
            height: "80%",
            borderRadius: "50%",
            background: "rgba(167,139,250,0.15)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(167,139,250,0.3))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              color: "#38bdf8",
              fontFamily: "monospace",
              fontWeight: "bold",
            }}
          >
            ST
          </div>
          <span style={{ fontSize: 48, fontWeight: "bold", color: "#fafafa", fontFamily: "sans-serif" }}>
            Spider<span style={{ color: "#38bdf8" }}>Tech</span>
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "80%",
            fontFamily: "sans-serif",
          }}
        >
          Sistemas sob medida & Landing Pages que convertem
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 18,
            color: "#38bdf8",
            fontFamily: "sans-serif",
            display: "flex",
            gap: 24,
          }}
        >
          <span>→ Sistemas Sob Demanda</span>
          <span>→ Landing Pages</span>
          <span>→ Suporte Dedicado</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
