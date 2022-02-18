/*
function agregarHttp(url) {
  return "http://" + url;
}

function procesar(url, callback) {
  urlCompletas = [];
  for (let i = 0; i < url.length; i++) {
    urlCompletas[i] = callback(url[i]);
  }
  return urlCompletas;
}

array = ["www.google.com", "www.yahoo.com"];
console.log(procesar(array, agregarHttp));
*/

let objeto = [
  "banana",
  "banana",
  "banana",
  "banana",
  "manzana",
  "manzana",
  "manzana",
  "melon",
];
let valor = objeto.reduce((objetoTotal, fruta) => {
  objetoTotal[fruta] = (objetoTotal[fruta] || 0) + 1; // si la clave no existe la crea sino incrementa en 1 unidad
  console.log(objetoTotal);
  return objetoTotal; //retorna el objeto
}, {});
console.log(valor);

let obj = {};
obj.nombre = "Victor"; // crea la propiedad si no está
obj["apellido"] = "Celedón"; // propiedad dinámica
