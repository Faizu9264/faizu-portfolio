import { readFileSync } from "node:fs";
import { join } from "node:path";

// Reads intrinsic dimensions of a /public image at build time so <img> tags get
// width/height (prevents layout shift). Supports WebP, PNG and JPEG — no dependencies.
const cache = new Map<string, { width: number; height: number } | undefined>();

export function imageSize(src: string) {
  if (cache.has(src)) return cache.get(src);
  let size: { width: number; height: number } | undefined;
  try {
    size = parse(readFileSync(join(process.cwd(), "public", src)));
  } catch {
    size = undefined;
  }
  cache.set(src, size);
  return size;
}

function parse(b: Buffer) {
  // PNG
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  // WebP
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }
  // JPEG: walk segments to the first SOF marker
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return undefined;
}
