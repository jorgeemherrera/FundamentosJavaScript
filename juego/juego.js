/**
 * Constantes de colores
 */
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

/**
 * Class
 */
class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
  }
  // Ocultar el botón de empezar a jugar!
  inicializar(){
    btnEmpezar.classList.add('hide')
    this.level = 1
    this.colors = {
      celeste,
      violeta,
      naranja,
    }
  }
  // Juego {secuencia: Array(10)}
  generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
}

function empezarJuego() {
 window.juego = new Juego()
}