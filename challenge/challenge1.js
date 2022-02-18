let autor = {
  nombre: "Zapatero",
  generos: ["drama", "comedia", "thriller"],
  biografia: `Este escritor conocido mundialmente nació en España en 1945`,
  printInfo: function () {
    return `El nombre del autor es: ${this.nombre}.
      Biografía:
      ${this.biografia}.`;
  },
  printLista: function () {
    return `Los géneros escritos por el autor son los siguientes:
      ${this.generos}`;
  },
};

//console.log(autor);
console.log(autor.printInfo());
console.log(autor.printLista());
