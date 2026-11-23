import sharp from 'sharp';
import { mkdir, copyFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const [acolher, concentrar, desacelerar, infraestrutura] = process.argv.slice(2);
if (![acolher, concentrar, desacelerar, infraestrutura].every(Boolean)) {
  throw new Error('Uso: node scripts/preparar-imagens.mjs acolher.png concentrar.png desacelerar.png infraestrutura.png');
}
const destination = resolve('public/imagens');
await mkdir(destination, { recursive: true });
for (const [source, name, widths] of [
  [acolher, 'ambiente', [640, 1024, 1536]],
  [concentrar, 'cena-concentrar', [768, 1536]],
  [desacelerar, 'cena-desacelerar', [768, 1536]],
  [infraestrutura, 'infraestrutura', [480, 960]],
]) {
  for (const width of widths) {
    const image = sharp(source).resize({ width, withoutEnlargement: true });
    for (const format of ['avif', 'webp']) {
      const path = resolve(destination, `${name}-${width}.${format}`);
      await image.clone()[format]({ quality: format === 'avif' ? 62 : 83 }).toFile(path);
      console.log(`${name}-${width}.${format}: ${Math.round((await stat(path)).size / 1024)} KB`);
    }
  }
}
const photo = await sharp(acolher).resize(720, 630, { fit: 'cover', position: 'right' }).toBuffer();
const type = Buffer.from(`<svg width="1200" height="630"><rect width="1200" height="630" fill="#f6f3ee"/><path d="M55 92h30" stroke="#b87919" stroke-width="3"/><g fill="#101114" font-family="Arial,sans-serif"><text x="55" y="147" font-size="30" letter-spacing="3">FASE / FORMA</text><text x="55" y="260" font-size="52" font-weight="bold">O invisível</text><text x="55" y="322" font-size="52" font-weight="bold">sustenta.</text><text x="55" y="402" font-size="40">A luz transforma.</text><text x="55" y="540" font-size="17">Projeto demonstrativo · Empresa fictícia</text></g></svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f6f3ee' } }).composite([{ input: photo, left: 480, top: 0 }, { input: await sharp(type).extract({ left: 0, top: 0, width: 480, height: 630 }).png().toBuffer(), left: 0, top: 0 }]).jpeg({ quality: 85 }).toFile(resolve(destination, 'social.jpg'));
await mkdir('public/licencas', { recursive: true });
await copyFile('node_modules/@fontsource-variable/sora/LICENSE', 'public/licencas/Sora-OFL.txt');
await copyFile('node_modules/@fontsource-variable/instrument-sans/LICENSE', 'public/licencas/InstrumentSans-OFL.txt');
