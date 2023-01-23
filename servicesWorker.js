const dinoGame = "dasturUZ";
const assets = [
  "/",
  "/index.html",
  "/styles/css/main.css",
  "/js/app.js",
  "/images",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(dinoGame).then((cashe) => {
      cashe.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.responWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
