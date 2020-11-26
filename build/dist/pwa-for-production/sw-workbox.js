importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
);

// Turn on logging
workbox.setConfig({
  debug: true,
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([{"revision":"b7b6ce5d80bb6f64dab5de79284db2d5","url":"favicon.ico"},{"revision":"52ba9c9499227ff3de4a04547e28b77b","url":"index.html"},{"revision":"1a0728ccfd858acdb58c8c60d9f9defe","url":"styles.css"},{"revision":"80846bb3403b82a07c7f84658f186b23","url":"main.js"},{"revision":"56f34b0f4d3a42d45bfdb1782adaa173","url":"polyfills.js"},{"revision":"cd1ce3e306bf57f272364d1cc0249d6e","url":"runtime.js"},{"revision":"ac1e219499a1f551f7c5260dede5c952","url":"assets/icons/icon-128x128.png"},{"revision":"ab7138a30a5ea21b82d7ce9f1c2f7da7","url":"assets/icons/icon-144x144.png"},{"revision":"e66bad96ac15efc694f8b00a9d4f4628","url":"assets/icons/icon-152x152.png"},{"revision":"04fa9e9b2036c069768ed6bf0205dbdd","url":"assets/icons/icon-192x192.png"},{"revision":"b5c9d11e03e76e57f5fe147b7919e38c","url":"assets/icons/icon-384x384.png"},{"revision":"26bf25fc911b1f831b8ca30aac7b60ef","url":"assets/icons/icon-512x512.png"},{"revision":"e77b022471d61336aea8ebea103a96a0","url":"assets/icons/icon-72x72.png"},{"revision":"34e68536a9dc7696e7c05b9def53f1e4","url":"assets/icons/icon-96x96.png"}]);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  new workbox.strategies.NetworkFirst()
);

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  new workbox.strategies.CacheFirst()
);
