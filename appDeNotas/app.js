//App de Notas
//Crear una instancia para consumir el módulo funcionesDeTareas.js
let notas = require("./funcionesDeTareas.js");
//Crear una lectura de comandos desde la terminal
//[0] contiene al comando "node"
//[1] contiene el nombre del archivo "app.js"
//[2...n] contiene los argumentos pasados por terminal que se encuentren separados por " "
let comandos = process.argv[2];
//Crear una selección de opciones pasadas por la línea de comandos
switch (comandos) {
  //Crear una llamada al método listar del archivo leído
  case "listar":
    notas.listar();
    break;
  //Crear una llamada al método crear del archivo leído
  case "nueva":
    //El título de la nueva tarea debe ingresarse desde la terminal a continuación de nueva
    let tarea = { titulo: process.argv[3], estado: "Pendiente" };
    notas.nueva(tarea);
    break;
  case "filtrar":
    let estado = process.argv[3];
    notas.filtrar(estado);
    break;
  case "actualizar":
    //Actualiza un titulo con el estado pasados por terminal
    let propiedad = process.argv[3];
    let estadoActualizar = process.argv[4];
    let nuevasNotas = notas.actualizar(propiedad, estadoActualizar);
    notas.listar(nuevasNotas);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer");
    break;
}
