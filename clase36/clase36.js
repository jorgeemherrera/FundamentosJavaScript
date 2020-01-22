var jorge = {
  nombre: 'Jorge Eliécer',
  apellido: 'Muñoz Herrera',
  edad: 28
}
function esMayorDeEdad(persona) {
  var mensaje; // Hoisting
  if (persona.edad > 18) {
    mensaje = ' Es mayor de edad' // Hoisting
  } else {
    mensaje = ' Es menor de edad'  // Hoisting
    // var mensaje2 = 'Este es otro mensaje'
    let mensajeLet = 'Mensaje con let'
  }
  console.log(persona.nombre + mensaje)
  // console.log(mensaje2)
  console.log('mensajeLet: ', mensajeLet)
}

for(var i = 0; i <10; i++) {
  console.log(i)
}

esMayorDeEdad(jorge)