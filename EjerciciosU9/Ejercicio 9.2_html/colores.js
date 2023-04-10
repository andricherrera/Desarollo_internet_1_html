let colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja'];

let tercerColor = colores[2];

let tercerColorElement = document.getElementById("tercer-color");

let h2 = document.createElement("h2");
h2.innerText = tercerColor;

tercerColorElement.appendChild(h2);
