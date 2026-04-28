self.addEventListener('fetch', (event) => {
  // This just lets the app work offline if needed
  event.respondWith(fetch(event.request));
});
