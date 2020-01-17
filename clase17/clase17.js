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

var personas = [Daniel, Paula, Juan, Arturo, Diana]

for(var i = 0; i < personas.length; i++) {
  let persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura} mts. `);
}