

// Script para tornar o menu fixo ao rolar a página
window.addEventListener('scroll', function() {
  const nav = document.getElementById('menu');
  if (window.scrollY > 50) {
    nav.classList.add('fixo');
  } else {
    nav.classList.remove('fixo');
  }
});

// Script para controlar o menu hamburger (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active'); // Animação do hambúrguer para "X"
});

// Atualização do script para transições mais detalhadas no carrossel
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function setAnimation(item, animation) {
    item.style.animation = animation;
}

function clearAnimation(item) {
    item.style.animation = '';
}

function prevSlide() {
    const currentItem = items[currentIndex];
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    const nextItem = items[currentIndex];

    // Adicionar animações detalhadas
    setAnimation(currentItem, 'fadeOutLeft 0.8s forwards');
    setAnimation(nextItem, 'fadeInRight 0.8s forwards');

    setTimeout(() => {
        currentItem.classList.remove('active');
        nextItem.classList.add('active');
        clearAnimation(currentItem);
        clearAnimation(nextItem);
    }, 800);
}

function nextSlide() {
    const currentItem = items[currentIndex];
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    const nextItem = items[currentIndex];

    // Adicionar animações detalhadas
    setAnimation(currentItem, 'fadeOutRight 0.8s forwards');
    setAnimation(nextItem, 'fadeInLeft 0.8s forwards');

    setTimeout(() => {
        currentItem.classList.remove('active');
        nextItem.classList.add('active');
        clearAnimation(currentItem);
        clearAnimation(nextItem);
    }, 800);
}


// Alterna automaticamente a cada 6 segundos
setInterval(nextSlide, 6000);

// Carrega o slide inicial
items[currentIndex].classList.add("active");

