/**
 * Constantes de colores
 */
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const LAST_LEVEL = 1

/**
 * Class
 */
class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.nextLevel(), 500)
  }
  // Ocultar el botón de empezar a jugar!
  inicializar(){
    this.nextLevel = this.nextLevel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    this.iluminarColor = this.iluminarColor.bind(this)
    this.toggleBtnEmpezar()
    this.level = 1
    this.colors = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  toggleBtnEmpezar() {
    if(btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
    }
  }
  // Juego {secuencia: Array(10)}
  generarSecuencia() {
    this.secuencia = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }
  // Siguiente nivel
  nextLevel() {
    this.subLevel = 0
    this.iluminarSecuencia()
    this.agregarEventoClick()
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
  transformarColorNumero(color) {
    switch(color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
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
  // Input del usuario
  agregarEventoClick() {
    this.colors.celeste.addEventListener('click', this.elegirColor)
    this.colors.violeta.addEventListener('click', this.elegirColor)
    this.colors.naranja.addEventListener('click', this.elegirColor)
    this.colors.verde.addEventListener('click', this.elegirColor)
  }

  eliminarEventosClick() {
    this.colors.celeste.removeEventListener('click', this.elegirColor)
    this.colors.violeta.removeEventListener('click', this.elegirColor)
    this.colors.naranja.removeEventListener('click', this.elegirColor)
    this.colors.verde.removeEventListener('click', this.elegirColor)
  }

  /**
   * data-color: dataset --> color que tocó el usuario
   * @param {*} ev 
   */
  elegirColor(ev) {
   const nameColor = ev.target.dataset.color
   const numberColor = this.transformarColorNumero(nameColor)
   this.iluminarColor(nameColor)
   if (numberColor === this.secuencia[this.subLevel]) {
     this.subLevel++
     if (this.subLevel === this.level) {
       this.level ++
       this.eliminarEventosClick()
       if (this.nivel === (LAST_LEVEL + 1)) {
         this.ganoElJuego()
       } else {
         setTimeout(this.nextLevel(), 1500)
       }
     }
   } else {
    this.perdioElJuego()
    }
  }

  ganoElJuego() {
    swal('Platzi', 'Felicitaciones ganaste el juego', 'success')
      .then(this.inicializar)
  }

  perdioElJuego() {
    swal('Platzi', 'Perdiste el juego, intenta de nuevo', 'error')
      .then(() => {
        this.eliminarEventosClick()
        this.inicializar()
      })
  }
}

function empezarJuego() {
 window.juego = new Juego()
}