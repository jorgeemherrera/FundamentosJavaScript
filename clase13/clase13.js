var jorge = {
  nombre: 'Jorge',
  apellido: 'Muñoz Herrera',
  edad: 28,
  peso: 82
}
console.log(`Al inicio del año ${jorge.nombre} pesa ${jorge.peso} Kg.`);

const PESO = 0.2;
const ANIO = 365;

const aumentarPeso = persona => persona.peso += PESO;
const rebajarPeso = persona => persona.peso -= PESO;

for(var i = 1; i <= ANIO; i++) {
  var random = Math.random()
  if (random < 0.25) {
    // Aumentar
    aumentarPeso(jorge)
  } else if (random < 0.5) {
    // Adelgazar
    rebajarPeso(jorge)
  }
}
console.log(`Al final del año ${jorge.nombre} pesa ${jorge.peso.toFixed(2)} Kg.`);

