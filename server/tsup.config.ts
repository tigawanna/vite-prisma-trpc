import { defineConfig } from 'tsup';

export default defineConfig({
//   dts: true,
//   minify: true,
  // sourcemap: true,
  treeshake: true,
//   splitting: true,
  // clean: true,
  entry: ['src/index.ts'],
  format: ['esm'],
});
