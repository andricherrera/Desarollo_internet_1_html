var objeto = document.getElementById("objeto");
var posicionX = 50;  
var posicionY = 50; 

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {

    posicionX -= 10;
  } else if (event.key === "ArrowRight") {

    posicionX += 10;
  } else if (event.key === "ArrowUp") {

    posicionY -= 10;
  } else if (event.key === "ArrowDown") {

    posicionY += 10;
  }
  

  objeto.style.left = posicionX + "%";
  objeto.style.top = posicionY + "%";
});
