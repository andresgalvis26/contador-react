// Primer forma de comprobar SW
// if("serviceWorker" in navigator){
//     console.log("Si existo!")
// }

// Segunda forma de comprobar SW
if (navigator.serviceWorker){
    //console.log("Si existe!")
    navigator.serviceWorker.register("./sw.js")
}

