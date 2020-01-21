const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  // Promise
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(data) {
        resolve(data)
      })
      .fail(() => reject(id));
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}
async function obtenerPersonajes() {
  let ids = [1, 2, 3, 4, 5, 6, 7]

  let promesasArray = ids.map(id => obtenerPersonaje(id))
  /**
   * Tarea asincrona
   */
  try {
    let personajes = await Promise.all(promesasArray)
    console.log(personajes)
  }
  catch(id) {
    onError(id)
  }
}

obtenerPersonajes()



