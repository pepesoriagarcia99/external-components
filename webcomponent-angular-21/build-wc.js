import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/user-card-wc.js',
  minify: true,
  sourcemap: false,
  target: ['es2020'],
  treeShaking: true,
  logLevel: 'info',
  define: {
    'ngDevMode': 'false',
    'ngI18nClosureMode': 'false',
    'ngJitMode': 'false'
  }
});