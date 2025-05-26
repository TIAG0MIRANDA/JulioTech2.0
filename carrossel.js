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
btnProximo.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  atualizarCarrossel();
});

// Voltar
btnAnterior.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  atualizarCarrossel();
});

// Função que move o carrossel
function atualizarCarrossel() {
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}
