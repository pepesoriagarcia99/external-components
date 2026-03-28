// const esbuild = require('esbuild');

// esbuild.build({
//   entryPoints: ['src/main.ts'],
//   bundle: true,
//   outfile: 'dist/user-card.js',
//   format: 'iife', // MUY IMPORTANTE (para navegador)
//   platform: 'browser',
//   target: ['es2020'],
//   minify: true,
//   sourcemap: false,
// }).catch(() => process.exit(1));

// build-wc.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/main.ts'], // main.ts que define todos los webcomponents
  bundle: true,
  outfile: 'dist/user-card.js',
  format: 'iife',
  platform: 'browser',
  minify: true,
}).catch(() => process.exit(1));