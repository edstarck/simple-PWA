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

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([{"revision":"0c3cf9bfca6609f66c27055a7a1ea182","url":"css/main.css"},{"revision":"1a5fcd3561c54a730b281679280bc606","url":"index.html"},{"revision":"a1c1724909801aabe823803ca84c1ee4","url":"js/app.js"},{"revision":"6e8558e3838d4eb1e716a979de6e50be","url":"manifest.json"}]);

// API with cache-first strategy
workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  new workbox.strategies.CacheFirst()
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        maxEntries: 30,
      }),
    ],
  })
);
