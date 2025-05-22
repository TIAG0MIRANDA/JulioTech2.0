const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let index = 0;

btnProximo.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    atualizarCarrossel();
});

btnAnterior.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
});

function atualizarCarrossel() {
    slides.style.transform = `translateX(${-index * 400}px)`;
}
