let carro = {
    nome:'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,

    ligar:function() {
        this.ligado= true; //this = acessa o próprio objeto
        console.log('O carro está ligado!');
    },
    acelerar:function() {
        if (this.ligado == true) {
            console.log('Acelerando...');
        } else {
            console.log('O carro está desligado!');
        }
    }
}

//Objetos dentro de uma array:

let automoveis = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Audi', modelo:'A4'}
];

//Selecionar Audi

console.log(automoveis[2].nome);