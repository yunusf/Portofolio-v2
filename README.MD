# WEBSITE PORTOFOLIO

## Spesifikasi

- Tailwind CSS versi 3

## Website & Tools Pendukung

- Framework CSS: Tailwind CCSS versi 3 | https://tailwindcss.com/
- Blobmaker: https://www.blobmaker.app/
- Simple Icons: https://simpleicons.org/
- Prettier

### Installasi Tools Pendukung

running program: `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
prettier: di simpan di Dependencies

- `npm i -D prettier prettier-plugin-tailwindcss`

minification/mengecilkan ukuran file css jika produk sudah final

- `npx tailwindcss -o ./dist/css/final.css --minify`
  atau
- `npx tailwindcss -i ./src/input.css -o ./dist/css/final.css --minify`
