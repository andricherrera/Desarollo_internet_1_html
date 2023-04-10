
var objeto = document.getElementById("objeto");
var colores = ["red", "black", "blue", "green", "purple"]; 
var indiceColor = 0; 

function cambiarColor() {
  
  indiceColor = (indiceColor + 1) % colores.length;
  var nuevoColor = colores[indiceColor];
  
  
  objeto.style.backgroundColor = nuevoColor;
  objeto.style.color = "white";
}

setInterval(cambiarColor, 1000); // 
