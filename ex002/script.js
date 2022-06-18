function verde() {
    document.querySelector('#exemplo').classList.add('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('vermelho');
}

function vermelho() {
    document.querySelector('#exemplo').classList.add('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');
}

function azul() {
    document.querySelector('#exemplo').classList.add('azul');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
}