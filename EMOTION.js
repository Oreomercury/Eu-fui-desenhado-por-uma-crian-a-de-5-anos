let emocao = 100;

const pet = document.getElementById("pet");
const estado = document.getElementById("estado");

function atualizarEstado() {
  if (emocao > 65) {
    pet.src = "feliz.png";
    pet.style.opacity = "1";
    estado.textContent =
      "Ele ainda sente algo. Ele se sente vivo.";
  } 
  else if (emocao > 30) {
    pet.src = "medo.png";
    pet.style.opacity = "0.8";
    estado.textContent =
      "O mundo parece grande demais. Grande demais para ele suportar.";
  } 
  else if (emocao > 0) {
    pet.src = "apatico.png";
    pet.style.opacity = "0.5";
    estado.textContent =
      "As emoções estão desaparecendo. A esperança está acabando, e o tempo também.";
  } 
  else {
    pet.style.opacity = "0";
    estado.innerHTML =
      "Seu tempo não é eterno.<br>" +
      "Não abandone quem sempre esteve lá por você.<br><br>" +
      "<span style='font-size:14px; opacity:0.6;'>Feito por Carolina/Oreo (@dear.oreomercury no Instagram)</span>";
    clearInterval(ciclo);
  }
}

const ciclo = setInterval(() => {
  emocao -= 1;

  if (emocao < 0) {
    emocao = 0;
  }

  atualizarEstado();
}, 500);

atualizarEstado();
