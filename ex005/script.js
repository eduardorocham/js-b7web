function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

/* ocultar botão */

function aparecerBotao() {
    if (window.scrollY == 0) {
        document.querySelector('.botao').classList.add('none');
    }
}

/* outra maneira:

    function aparecerBotao() {
    if (window.scrollY == 0) {
        document.querySelector('.botao').style.display = 'none';
    }
}

*/