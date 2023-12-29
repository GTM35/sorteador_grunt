document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form-sorteador").addEventListener("submit", (e) => {
    e.preventDefault();

    let numeroMaximo = document.getElementById("numero-maximo").value;
    numeroMaximo = parseInt(numeroMaximo);

    let numeroAletorio = Math.random() * numeroMaximo;
    numeroAletorio = Math.floor(numeroAletorio + 1);
    document.getElementById("resultado-valor").innerText = numeroAletorio;
    document.querySelector(".resultado").style.display = "block";
  });
});
