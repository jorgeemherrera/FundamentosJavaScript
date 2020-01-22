const jorge = {
  nombre: 'Jorge',
  edad: 28
}

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
