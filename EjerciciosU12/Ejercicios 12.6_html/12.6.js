var lienzo = document.getElementById("lienzo");
var ctx = lienzo.getContext("2d");

var x = 200; // posición inicial en el eje X
var y = 200; // posición inicial en el eje Y
var vx = 5; // velocidad inicial en el eje X
var vy = 5; // velocidad inicial en el eje Y
var radio = 20; // radio de la pelota

function rebote() {
  // borrar el lienzo
  ctx.clearRect(0, 0, lienzo.width, lienzo.height);

  // dibujar la pelota
  ctx.beginPath();
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  ctx.fill();

  // actualizar la posición de la pelota
  x += vx;
  y += vy;

  // comprobar si la pelota ha llegado al borde del lienzo
  if (x + radio > lienzo.width || x - radio < 0) {
    vx = -vx;
  }
  if (y + radio > lienzo.height || y - radio < 0) {
    vy = -vy;
  }

  // esperar un poco y llamar a la función de nuevo
  setTimeout(rebote, 10);
}

rebote();
