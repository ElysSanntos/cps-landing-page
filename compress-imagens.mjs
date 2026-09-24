import sharp from "sharp";
import { renameSync } from "fs";

const alvos = [
  ["src/assets/images/cleiton.webp", 650, 70],
  ["src/assets/images/carrossel/p1.webp", 651, 65],
  ["src/assets/images/carrossel/p2.webp", 651, 65],
  ["src/assets/images/carrossel/p3.webp", 651, 65],
  ["src/assets/images/carrossel/p4.webp", 651, 65],
  ["src/assets/images/carrossel/p5.webp", 651, 65],
];

for (const [arquivo, largura, qualidade] of alvos) {
  const tmp = arquivo + ".tmp.webp";
  await sharp(arquivo).rotate().resize({ width: largura }).webp({ quality: qualidade }).toFile(tmp);
  renameSync(tmp, arquivo);
  const meta = await sharp(arquivo).metadata();
  console.log(arquivo + " => " + Math.round(meta.size / 1024) + " KB");
}
