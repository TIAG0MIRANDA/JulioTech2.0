const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let index = 0;
let slideWidth = document.querySelector('.carrossel').clientWidth;

// Atualiza largura quando redimensionar a tela
window.addEventListener('resize', () => {
  slideWidth = document.querySelector('.carrossel').clientWidth;
  atualizarCarrossel();
});

// Avançar
btnProximo.addEventListener('click', avancar);

// Voltar
btnAnterior.addEventListener('click', voltar);

// Função avançar
function avancar() {
  index = (index + 1) % imagens.length;
  atualizarCarrossel();
}

// Função voltar
function voltar() {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
}

// Função que move o carrossel
function atualizarCarrossel() {
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

// 🔥 Carrossel automático a cada 5 segundos
let tempo = setInterval(avancar, 5000);

// 🔥 Se quiser pausar quando o mouse estiver em cima:
const carrossel = document.querySelector('.carrossel');

carrossel.addEventListener('mouseenter', () => {
  clearInterval(tempo);
});

carrossel.addEventListener('mouseleave', () => {
  tempo = setInterval(avancar, 5000);
});
