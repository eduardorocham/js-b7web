//Desconstruindo objetos

let pessoa = {
    nome: 'Boniey',
    sobrenome: 'Lacerda',
    idade: 90,
    social: {
        facebook: 'b7web',
        instagram: 'boniey',
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

//Pegar elementos do objeto:

/*Ao invés de
    let nome = pessoa.nome;
    let sobrenome = pessoa.sobrenome;
    let idade = pessoa.idade;
*/

// Pode-se utilizar:

let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);

/*Pegando elementos do objeto dentros de outro objeto:

    let {nome, sobrenome, social:{instagram}} = pessoa;

    console.log(nome, sobrenome, istagram);

    Ou

    let {faceboo, instagram} = pessoa.social;

*/
