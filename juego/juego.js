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
    this.nextLevel()
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
  // Siguiente nivel
  nextLevel() {
    this.iluminarSecuencia()
  }

  transformarNumeroColor(numero) {
    switch(numero) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }
  /**
   * recorrer el array de la secuencia hasta el nivel que esté el usuario. level 1 default
   */
  iluminarSecuencia() {
    for(let i = 0; i < this.level; i++) {
      const color = this.transformarNumeroColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }

  iluminarColor(color) {
    this.colors[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color) {
    this.colors[color].classList.remove('light')
  }
}

function empezarJuego() {
 window.juego = new Juego()
}