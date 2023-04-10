

var objeto = document.getElementById("objeto");
var escala = 1; 

document.addEventListener("keydown", function(event) {
  if (event.key === "+") {
    
    escala += 0.1;
  } else if (event.key === "-") {
    
    escala -= 0.1;
  }
  
  objeto.style.transform = "scale(" + escala + ")";
});
