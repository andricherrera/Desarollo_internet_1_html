let numeros = [5, 10, 15, 20, 25];

let pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

let numerosParesElement = document.getElementById("numeros-pares");

for (let i = 0; i < pares.length; i++) {
  let li = document.createElement("li");
  li.innerText = pares[i];
  numerosParesElement.appendChild(li);
}
