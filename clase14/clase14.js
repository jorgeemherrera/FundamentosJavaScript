var jorge = {
  nombre: 'Jorge',
  apellido: 'Muñoz Herrera',
  edad: 28,
  peso: 82
}
console.log(`Al inicio del año ${jorge.nombre} pesa ${jorge.peso} Kg.`);

const PESO = 0.3;
const ANIO = 365;

const aumentarPeso = persona => persona.peso += PESO;
const rebajarPeso = persona => persona.peso -= PESO;
const comerMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4
const META = jorge.peso - 10;
let dias = 0;

while(jorge.peso > META) {
  if (comerMucho()) {
    // Aumentar de peso
    aumentarPeso(jorge)
  }
  if (realizaDeporte()) {
    // adelgazar
    rebajarPeso(jorge)
  }
  dias += 1;
}
console.log(`Pasaron ${dias} dias hasta que ${jorge.nombre} alcanzó el peso de ${jorge.peso.toFixed(2)} Kg.`);

