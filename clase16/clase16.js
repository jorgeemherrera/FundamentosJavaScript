var signo = prompt('¿Cual es tu signo?');

switch(signo) {
  case 'acuario':
    console.log('Intente organizar mejor sus actividades diarias. Sepa que el desorden y la falta de objetividad podrían ser los obstáculos en el éxito de sus proyectos.');
    break;
  case 'aries':
  case 'Aries':
    console.log('Con la Luna en oposición en su signo, deberá tener cuidado de no descartar sus objetivos de forma radical. Deje de tomar decisiones de manera apresurada.');
    break;
  default:
    console.log('por favor escriba bien su signo');
    break;
}