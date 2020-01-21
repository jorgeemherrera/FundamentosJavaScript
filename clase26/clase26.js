class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    return console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(nombre, apellido)
    }
  }
}

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
    super(nombre, apellido, altura)
  }
  saludar(fn) {
    let nombre = this.nombre;
    let apellido = this.apellido;
    console.log(`Hola, me llao ${this.nombre} ${this.apellido} y soy desarrollador`);
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

let jorge = new Persona('Jorge Eliécer', 'Muñoz Herrera', 170)
let samuel = new Persona('Samuel', ' Muñoz', 185)
let arturo = new Desarrollador('Arturo', 'Dev', 189)

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día, ${nombre} ${apellido} `);
  if (esDev) {
    console.log(`No sabia que eras desarrollador`)
  }
}


jorge.saludar()
samuel.saludar()
arturo.saludar(responderSaludo)