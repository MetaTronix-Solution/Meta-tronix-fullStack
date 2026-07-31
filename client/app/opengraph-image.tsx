import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Meta Tronix — product engineering from Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 45%, #0e7490 100%)",
          padding: 56,
        }}
      >
        <div
          style={{
            fontSize: 26,
            color: "#7dd3fc",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Meta Tronix
        </div>
        <div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.08,
              maxWidth: 980,
              letterSpacing: "-0.02em",
            }}
          >
            Product engineering & digital transformation
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#bae6fd",
              marginTop: 20,
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Web, mobile, SaaS & cloud — Kathmandu, Nepal
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#64748b" }}>meta-tronix.com</div>
      </div>
    ),
    { ...size }
  );
}
