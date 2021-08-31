//console.log("Registrado")

// CACHÉ DE ELEMENTOS
const CACHE_ELEMENTS = [
    "/.",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    "./style.css",
    "./components/Contador.js"
    // Se podría cachear también el ./register.js pero mejor dejarlo así, no es necesario.
]

// NOMBRE DEL CACHÉ
const CACHE_NAME = "v3_cache_contador_react"

// INICIAR PRIMER EVENTO
// const self = this

// INSTALL
self.addEventListener("install", (e) => {
    //console.log(e)
    e.waitUntil(
        // RETORNA UNA PROMESA
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then( () => {
                self.skipWaiting()
            }).catch(console.log)
        })
    )
})

// ACTIVE
self.addEventListener("activate", (e) => {

    const cacheWhiteList = [CACHE_NAME]

    //console.log(e)
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            //console.log(cacheNames)
            return Promise.all(cacheNames.map(cacheName => {
                cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName) 
            }))
        }).then(() => self.clients.claim())
    )
})

// FETCH
self.addEventListener("fetch", (e) => {
    //console.log(e)
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res;
            }
    
            return fetch(e.request)
        })
    );
});