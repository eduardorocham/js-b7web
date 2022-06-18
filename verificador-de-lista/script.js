const convidados = [
    {nome: 'Eduardo Rocha', idade: 19},
    {nome: 'Carlos José', idade: 21}
];

document.querySelector('input[type=button]').addEventListener('click', ()=>{
    let convidado = document.querySelector('#nome').value;
    let index = convidados.findIndex((item)=>{
        return item.nome == convidado;
    });
    if (index > -1) {
        document.querySelector('.res').innerHTML = 'Seja bem-vindo, voce é nosso convidado!';
        document.querySelector('.res').style.color = 'green';
    } else {
        document.querySelector('.res').innerHTML = 'Não foi possível encontrar seu nome na lista!';
        document.querySelector('.res').style.color = 'red';
    };
});
