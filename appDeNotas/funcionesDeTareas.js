const fs = require("fs");
//Es necesario separar en funciones básicas
//crear un objeto que incluya las propiedades y métodos
//A lo pedido sumar editar, actualizar, crear, listar, etc.
let archivoDeTareas = {
  //crear una propiedad que indique el nombre del archivo a leer
  archivo: "tareas.json",
  //crear un método que me permita leer el archivo
  leerArchivo() {
    const tareas = fs.readFileSync(__dirname + "/" + this.archivo, "utf-8");
    let tareasJSON = JSON.parse(tareas);
    return tareasJSON;
  },
  //crear un método que me permita escribir el archivo
  escribirArchivo(tareasJSON) {
    const tareas = JSON.stringify(tareasJSON);
    fs.writeFileSync(__dirname + "/" + this.archivo, tareas);
  },
  //Crear un método para listar las tareas
  //El método podrá listar las tareas filtradas pasadas como variable
  listar(tareasFiltradas) {
    //Si la variable tareasFiltradas no existe listar todas las tareas, sino listar filtradas
    if (!tareasFiltradas) {
      let tareas = this.leerArchivo();
      //Iterar sobre el listado de tareas para mostrarlas en forma independientes por consola
      tareas.forEach((tarea, indice) => {
        console.log(
          `#${indice}: La tarea ${tarea.titulo} se encuentra ${tarea.estado}.`
        );
      });
    } else {
      //Iterar sobre el listado de tareas filtradas para mostrarlas en forma independientes por consola
      tareasFiltradas.forEach((tarea, indice) => {
        console.log(
          `#${indice}: La tarea ${tarea.titulo} se encuentra ${tarea.estado}.`
        );
      });
    }
  },
  //Crear un método que permita agregar nueva tarea
  nueva(tarea) {
    let tareas = this.leerArchivo();
    tareas.push(tarea);
    this.escribirArchivo(tareas);
  },
  //Crear un método que permita filtrar tareas
  filtrar(estado) {
    let tareas = this.leerArchivo();
    let tareasFiltradas = this.filtrarPorEstado(tareas, estado);
    this.listar(tareasFiltradas);
  },
  //Crear un método que retorne una lista filtrada
  filtrarPorEstado(tareas, estado) {
    let tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
    return tareasFiltradas;
  },
  //Crear un método que permita actualizar el estado de un titulo
  actualizar(propiedad, estado) {
    let tareas = this.leerArchivo();
    tareas.forEach((tarea) => {
      tarea.titulo === propiedad ? (tarea.estado = estado) : "";
    });
    this.escribirArchivo(tareas);
    return tareas;
  },
};
//const tareas = fs.readFileSync(__dirname + "/tareas.json", "utf-8");
//let tareasJSON = JSON.parse(tareas);
//console.log(tareasJSON);
//module.exports = tareasJSON;
module.exports = archivoDeTareas;
