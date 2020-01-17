var Daniel = {
  nombre: `Daniel`,
  apellido: `Dominguez`,
  altura: 1.82
}

var Paula = {
  nombre: `Paula`,
  apellido: `Torres`,
  altura: 1.70
}

var Juan = {
  nombre: `Juan`,
  apellido: `Lopez`,
  altura: 2.00
}

var Arturo = {
  nombre: `Arturo`,
  apellido: `Tello`,
  altura: 1.75
}

var Diana = {
  nombre: `Diana`,
  apellido: `Medina`,
  altura: 1.60
}


const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8
var personas = [Daniel, Paula, Juan, Arturo, Diana]

var personasAltas = personas.filter(esAlta) // <-- funcion como argumento, no como llamada a function()
var personasBajas = personas.filter(esBaja)
console.log(personasAltas)
console.log(personasBajas)
