import router from "./src/router";


addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
