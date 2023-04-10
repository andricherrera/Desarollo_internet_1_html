let numeros = [1, 2, 3, 4, 5];

let numerosMultiplicados = numeros.map(numero => numero * 2);

let numerosMultiplicadosElement = document.getElementById("numeros-multiplicados");

numerosMultiplicados.forEach(numero => {
  let li = document.createElement("li");
  li.innerText = numero;
  numerosMultiplicadosElement.appendChild(li);
});
