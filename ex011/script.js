function calcular() {
    let a = Number(document.querySelector('#numero').value);
    for (let c=1; c<=10; c++) {
        let time = c * a;
        document.querySelector('#res').innerHTML += a+'x'+c+'='+time +'</br>';

    }

}

function limpar() {
    document.querySelector('#res').innerHTML = '';
}