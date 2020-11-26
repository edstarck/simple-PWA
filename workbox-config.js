const { injectManifest } = require('workbox-build');

let workboxConfig = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{html,json,js,css}'],
  swSrc: 'src-sw.js',
  swDest: 'build/sw.js',
};

injectManifest(workboxConfig).then(({ count, size }) => {
  console.log(
    `Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
