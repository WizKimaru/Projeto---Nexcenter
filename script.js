/*
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const elementos = document.querySelectorAll('.corpo_main, .main_clients, .main_community, .bloco_1, .bloco_2, .bloco_3, .bloco_4, .bloco_5');

function animateOnScroll() {
    elementos.forEach(elemento => {
        if (isElementInViewport(elemento)) {
            elemento.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

animateOnScroll();
*/