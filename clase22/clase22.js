function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

let jorge = new Persona('Jorge Eliécer', 'Muñoz Herrera', 170)
let samuel = new Persona('Samuel', ' Muñoz', 185)


Persona.prototype.soyAlto = function () {
  if(this.altura >= 180) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy alto por que mido ${this.altura} cms.`);
  } else {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy bajo por que mido ${this.altura} cms.`);
  }
}

/**
 * Prototype
 */

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, persona)
  }
}