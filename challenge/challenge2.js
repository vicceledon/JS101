let moto = {
  tipo: "scooter",
  color: "negra",
  nafta: 5,
  consumo: 30,
  tieneNafta: function () {
    if (this.nafta < 1) {
      return `Debes cargar nafta, estás en reserva. 
            Queda ${this.nafta}`;
    } else {
      return `Tranquilo, la moto tiene ${this.nafta} litros de nafta.`;
    }
  },
  usoMoto: function (distancia) {
    this.nafta = this.nafta - distancia / this.consumo;
    //   return `Tanque de nafta ${this.nafta1}`;
  },
  cargarNafta: function () {
    this.nafta = 5;
  },
};

console.log(moto);
console.log(moto.tieneNafta());
moto.usoMoto(60);
console.log(moto.tieneNafta());
moto.usoMoto(70);
console.log(moto.tieneNafta());
moto.cargarNafta();
console.log(moto.tieneNafta());
