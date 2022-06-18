function trocar() {
    if (document.querySelector('div').classList.contains('verde')) {
        document.querySelector('div').classList.remove('verde');
        document.querySelector('div').classList.add('vermelho');
    } else {
        document.querySelector('div').classList.remove('vermelho');
        document.querySelector('div').classList.add('verde');
    }
}

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 15);

console.log(resultado);