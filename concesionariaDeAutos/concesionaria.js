/* requerir módulo autos */
let autos = require("./autos.js");
const concesionaria = {
  /* completar */
  autos: autos,
  buscarAuto: function (patente) {
    let aux = null;
    for (let i = 0; i < this.autos.length; i++) {
      if (autos[i].patente === patente) {
        aux = autos[i];
      }
    }
    return aux;
  },
  venderAuto: function (patente) {
    let autoVendido = this.buscarAuto(patente);
    this.autos.forEach((auto) => {
      auto === autoVendido ? (auto.vendido = true) : "";
    });
  },
  autosParaLaVenta: function () {
    let autosNoVendidos = this.autos.filter((auto) => auto.vendido === false);
    return autosNoVendidos;
  },
  autosNuevos: function () {
    let autosNoVendidos = this.autosParaLaVenta();
    let autos0Km = autosNoVendidos.filter((auto) => auto.km < 100);
    return autos0Km;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter((auto) => auto.vendido === true);
    let preciosAutosVendidos = autosVendidos.map((auto) => auto.precio);
    return preciosAutosVendidos;
  },
  totalDeVentas: function () {
    let ventas = this.listaDeVentas();
    let totalVentas = ventas.reduce((total, venta) => total + venta, 0);
    return totalVentas;
  },
  puedeComprar: function (auto, persona) {
    let costoTotal = auto.precio > persona.capacidadDePagoTotal ? false : true;
    let capacidadDePagoEnCuotas =
      auto.precio / auto.cuotas > persona.capacidadDePagoEnCuotas
        ? false
        : true;
    return costoTotal && capacidadDePagoEnCuotas;
  },
  autosQuePuedeComprar: function (persona) {
    let autosParaVenta = this.autosParaLaVenta();
    let listaDeAutosQuePuedeCompra = autosParaVenta.filter(
      (auto) => this.puedeComprar(auto, persona) === true
    );
    return listaDeAutosQuePuedeCompra;
  },
};
console.log(concesionaria.buscarAuto("ABC123"));
console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.buscarAuto("JJK116"));
//concesionaria.venderAuto("APL123");
//concesionaria.venderAuto("JJK116");
console.log(concesionaria.buscarAuto("JJK116"));
console.log(concesionaria.autosParaLaVenta());
console.log("autos 0km");
console.log(concesionaria.autosNuevos());
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());
//definicion de la persona
let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000,
};
//let autosParaVender = autos[1];
//console.log(concesionaria.puedeComprar(autosParaVender, persona));
console.log(concesionaria.autosQuePuedeComprar(persona));
