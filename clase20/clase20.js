var saul ={
  nombre: "saul",
  apellido: "solis",
  altura:1.72,
  cantidadDelibros: 60
}
var andrea ={
  nombre:"andrea",
  apellido:"ortiz",
  altura:1.62,
  cantidadDelibros: 70

}
var ariel={
  nombre:"ariel",
  apellido:"castro",
  altura: 1.70,
  cantidadDelibros: 50

}
var samuel={
  nombre:"samuel",
  apellido: "garcia",
  altura:1.52,
  cantidadDelibros: 32

}
var isabela ={
  nombre: "isabela",
  apellido:"ezpinoza",
  altura: 1.22,
  cantidadDelibros: 12
}

var personas = [saul, andrea, ariel, samuel, isabela]

const reducer = (acum, {cantidadDelibros}) =>  acum + cantidadDelibros

let totalLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalLibros} libros`)