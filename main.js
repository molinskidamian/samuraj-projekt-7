const body = document.querySelector('body');

function bgColor(e) {
  const x = Math.floor(e.clientX);
  const y = Math.floor(e.clientY);

  if (x % 2 && y % 2) {
    body.style.backgroundColor = 'rgb(255,0,0)';
    console.log('Czerwony --- obie wartości są parzyste');
    console.log(x, y);
  } else if (x % 3 && y % 3) {
    body.style.backgroundColor = 'rgb(0,191,255)';
    console.log('Niebieski --- obie wartości nie są parzyste');
    console.log(x, y);
  } else if (x % 2 || y % 2) {
    body.style.backgroundColor = 'rgb(34,139,34)';
    console.log('Zielony --- jedna z wartości jest parzysta');
    console.log(x, y);
  }
}

body.addEventListener('click', bgColor);
