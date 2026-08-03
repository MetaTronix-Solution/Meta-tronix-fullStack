import { ImageResponse } from "next/og";
import { getBlogPostDetailMerged } from "@/lib/sanity/content";

export const alt = "Meta Tronix blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: { slug: string } };

export default async function Image({ params }: Props) {
  const post = await getBlogPostDetailMerged(params.slug);

  const title =
    post?.title ??
    "Meta Tronix | Blog";
  const category = post?.category ?? "Blog";
  const safeTitle =
    title.length > 100 ? `${title.slice(0, 97)}…` : title;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0f172a 0%, #1e293b 40%, #164e63 100%)",
          padding: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: 22,
              color: "#67e8f9",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>
          <span style={{ fontSize: 22, color: "#64748b", fontWeight: 600 }}>
            Meta Tronix
          </span>
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.12,
            maxWidth: 1050,
            letterSpacing: "-0.02em",
          }}
        >
          {safeTitle}
        </div>
        <div style={{ fontSize: 22, color: "#94a3b8" }}>meta-tronix.com/blog</div>
      </div>
    ),
    { ...size }
  );
}
