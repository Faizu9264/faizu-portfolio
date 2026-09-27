import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Faizu Rahman — Full-Stack Developer, AI Tool Builder & Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public/profile.jpg"), "base64");
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0b0b0c",
          color: "#f2f1ec",
          padding: 72,
          gap: 56,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 30, color: "#c8f03c", marginBottom: 20 }}>faizu.</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            Faizu Rahman
          </div>
          <div style={{ fontSize: 36, marginTop: 20, color: "#c9c8ce", lineHeight: 1.3 }}>
            Full-stack developer building apps, AI tools & automations
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 36, fontSize: 24 }}>
            {["Next.js", "React Native", "n8n", "AI"].map((t) => (
              <div
                key={t}
                style={{ padding: "8px 18px", borderRadius: 999, border: "2px solid #33333a", color: "#c9c8ce" }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, marginTop: 30, color: "#8f8e96" }}>
            Instagram @faizu.dev · YouTube @CodeCodersYT · 19K+ followers
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          width={340}
          height={425}
          style={{ borderRadius: 32, objectFit: "cover", border: "4px solid #c8f03c" }}
        />
      </div>
    ),
    size,
  );
}
