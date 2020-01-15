var jorge = {
  nombre: 'Jorge',
  apellido: 'Herrera',
  edad: 28,
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj: false,
  baterista: true,
  drone: false,
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `)
  if(persona.ingeniero) {
    console.log('Ingeniero');
  } else {
    console.log('no es ingeniero');
    
  }
  if(persona.cocinero) {
    console.log('Cocinero');
  }
  if(persona.cantante) {
    console.log('Cantante');
  }
  if(persona.dj) {
    console.log('DJ');
  }
  if(persona.baterista) {
    console.log('Beterista');
  }
  if(persona.drone) {
    console.log('Drone');
  }
}

const MAYORIA_EDAD = 18

function esMayor(persona) {
  return persona.edad >= MAYORIA_EDAD;
}

function imprimirMayorEdad(persona) {
  if (esMayor(persona)) {
    console.log('Es mayor de edad');
  } else {
    console.log('es menor de edad');
  }
}
imprimirProfesiones(jorge)
imprimirMayorEdad(jorge)