self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Hanya agar syarat PWA terpenuhi, iframe yang menghandle data
});
