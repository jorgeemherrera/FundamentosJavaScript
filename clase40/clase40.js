function crearSaludo(finalSaludo) {
  return function(nombre) {
    console.log(`Hola ${nombre} ${finalSaludo}`)
  }
}

const saludoArg = crearSaludo('Che')
const saludoMex = crearSaludo('Wey')
const saludoCol = crearSaludo('Parce')

saludoArg('Jorge')
saludoMex('Jorge')
saludoCol('Jorge')
