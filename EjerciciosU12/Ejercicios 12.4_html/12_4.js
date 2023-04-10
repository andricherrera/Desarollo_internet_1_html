var objeto = document.getElementById("objeto");
var opacidad = 1; 

function cambiarOpacidad() {
  
  opacidad = (opacidad === 1) ? 0.5 : 1;
  objeto.style.opacity = opacidad;
}

setInterval(cambiarOpacidad, 1000); 
