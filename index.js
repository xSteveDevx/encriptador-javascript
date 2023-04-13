const resultado = document.querySelector("#parte-derecha");
const mensaje = document.querySelector("#mensaje");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const contenedorFinal = document.querySelector("#encriptado");
const muñeco = document.querySelector("#muñeco");
const texto1 = document.querySelector("#texto1");
const texto2 = document.querySelector("#texto2");
let textoFinal = document.querySelector("#texto-encriptado");
const textoEncriptado = document.querySelector("#texto-encriptado");

botonEncriptar.addEventListener("click", () => {
  let encriptado = "";
  const regex = /^[a-zA-Z\s]+$/;
  let evaluacion = regex.test(mensaje.value);
  if (mensaje.value < 1 || !evaluacion) return;
  let arr = mensaje.value.split("");
  arr.forEach((letra) => {
    if (letra === "a") {
      encriptado += "ai";
    } else if (letra === "e") {
      encriptado += "enter";
    } else if (letra === "i") {
      encriptado += "imes";
    } else if (letra === "o") {
      encriptado += "ober";
    } else if (letra === "u") {
      encriptado += "ufat";
    } else {
      encriptado += letra;
    }
  });

  textoEncriptado.innerText = encriptado; // Asignamos el texto encriptado al elemento creado
  textoEncriptado.style.display = "block"; // Mostramos el elemento
  textoEncriptado.style.fontSize = "1.5rem";
  textoEncriptado.style.color = "#0a3871";

  // Ocultamos los elementos que ya no son necesarios
  texto1.style.display = "none";
  texto2.style.display = "none";
  muñeco.style.display = "none";
  contenedorFinal.innerText = '';
  contenedorFinal.append(textoEncriptado);

});
botonDesencriptar.addEventListener("click", () => {
  const regex = /^[a-zA-Z\s]+$/;
  let evaluacion = regex.test(mensaje.value);
  if (mensaje.value < 1 || !evaluacion) return;
  let desencriptado = mensaje.value
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  const textoDesencriptado = document.createElement("p");
  textoDesencriptado.innerText = desencriptado;

  textoDesencriptado.style.fontSize = "1.5rem";
  textoDesencriptado.style.color = "#0a3871";

  texto1.style.display = "none";
  texto2.style.display = "none";
  muñeco.style.display = "none";

  contenedorFinal.innerText = '';
  contenedorFinal.append(textoDesencriptado);
});

