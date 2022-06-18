//Initial Data:

let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: '' 
};

let player = '';
let warning = '';
let playing = false;

reset();

//Events:
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
})

//Functions:

//Eventos de click no tabuleiro:
function itemClick(event) {
    let item = event.target.getAttribute('data-item'); /*target: acessa o próprio item que clicado*/
    if(playing && square[item] === '') {
        square[item] = player;
    }
    renderSquare();
    togglePlayer();
}

function reset() {
    warning = '';

    let randon = Math.floor(Math.random() * 2);
    player = (randon === 0) ? 'x' : 'o';
    /* Math.floor - Arredonda para baixo
    Math.random - Gera um número aleatório entre 0 e 1
    */
 
   for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}

function renderSquare() {
    //Atualizar na tela de acordo com os dados do objeto
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}


function togglePlayer() {
    player = (player === 'x' && playing === true) ? 'o' : 'x';
    renderInfo();
}

function checkGame() {
    if(checkWinner('x')) {
        warning = 'O "x" venceu!';
        playing = false;
    } else if (checkWinner('o')) {
        warning = 'O "o" venceu!';
        playing = false;
    } else if (isFull()) {
        warning = 'Deu empate!';
        playing = false;
    };
};

function checkWinner(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c3',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ]; //Possibilidades de vitória

    for(let w in pos) {
        let pArray = pos[w].split(','); //a1, a2, a3
        let hasWon = pArray.every(option => square[option] === player); /*
            option: os próprios itens do array
            ex: square[a1] === x
        */
        if(hasWon) {
            return true;
        }
    }

    return false;
}

//Verifica se todas as áreas do meu painel estão preenchidas
function isFull() {
    for(let i in square) {
        if(square[i] == '') {
            return false;
        };
    };

    return true;
}