
function contar() {
    for(let i=0; i<=50; i++) {
        document.getElementById('demo').innerHTML += i+'<br>';
    }
}

function carros() {
    let carros = ['Audi', 'BMW', 'Mercedes'];

    for (let i in carros) {
        console.log(carros[i])
    }
}