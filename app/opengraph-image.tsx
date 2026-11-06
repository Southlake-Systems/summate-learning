import { ImageResponse } from "next/og";

export const alt = "Summate Learning — AI-Augmented Full-Stack Developer Course";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #0F2A30 0%, #1D5F6E 55%, #55C9B8 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 4, opacity: 0.85 }}>
          SUMMATE LEARNING
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            AI-Augmented Full-Stack Developer Course
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            12 weeks · Live online · Batch 1, January 2027
          </div>
        </div>
      </div>
    ),
    size
  );
}
