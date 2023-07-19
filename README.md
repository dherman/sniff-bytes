# sniff-bytes

An npm library to sniff the file format of a binary buffer.

```javascript
import { sniffBytes, FileFormat } from 'sniff-bytes';

const IMAGE: string = `
P6
200 300
255
`.trim();

const BYTES: Uint8Array = new Uint8Array(IMAGE.split('').map(c => c.charCodeAt(0)));
const FORMAT: FileFormat = sniffBytes(BYTES.buffer);
console.log(FORMAT);
// {
//   name: 'Portable PixMap',
//   shortName: 'PPM',
//   mediaType: 'image/x-portable-pixmap',
//   extension: 'ppm'
// }
```

# Build

- To build locally, run `npm run debug`.
- To publish a new patch version, run `npm run release-patch`.
- To publish a new minor version, run `npm run release-minor`.
- To publish a new major version, run `npm run release-major`.
- To publish a custom version, run `npm run release -- NNN` where `NNN` is the desired version number.

# Using Neon to create Rust libraries in npm

This repo also serves as a simple example for using [Neon](https://neon-bindings.com) to build portable binary npm libraries implemented in Rust.

To build one of your own, follow this general recipe:

- Create a GitHub repo.
- Create a new free npm organization called `@mylib`, replacing `mylib` with your library's name.
- Create a classic npm automation token and save it as a repo token `NPM_TOKEN` in the GitHub repo secrets.
- Copy this repo's structure.
- Change the `package.json`'s `neon.targets` entry to replace `@sniff-bytes` with `@mylib`, again replacing `mylib` with your library's name.
- Change the `package.json` and `README.md` of each binary prebuild package in the `npm` directory to replace `sniff-bytes` with `mylib`, again replacing `mylib` with your library's name.
- Edit `src/lib.rs` (the Rust implementation of the binary module) and `lib/index.cjs` (the JavaScript wrapper) as you like.
- Edit `types/index.d.cts` as appropriate to provide types for the (CommonJS) exports of `lib/index.cjs` and `types/index.d.mts` to re-export the (ESM) exports.
- Edit the array of exports in `lib/load.cjs` to the complete set of exports of `index.cjs`.

(Many of these steps may still be automated by future versions of `@neon-rs/cli`.)

# License

MIT
