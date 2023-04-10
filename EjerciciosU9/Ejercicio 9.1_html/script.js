
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numerosElement = document.getElementById("numeros");

let ul = document.createElement("ul");

numeros.forEach(numero => {
  let li = document.createElement("li");
  li.innerText = numero;
  ul.appendChild(li);
});

numerosElement.appendChild(ul);
