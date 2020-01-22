const jorge = {
  nombre: 'Jorge',
  edad: 28
}

function saludar(saludo = 'Hola') {
  console.log(` ${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarJorge = saludar.bind(jorge)

// saludar.call(jorge, 'Hola parce')

saludar.apply(jorge, ['Hola parce apply'])