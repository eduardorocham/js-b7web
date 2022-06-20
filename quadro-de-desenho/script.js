//Initial Data
let currentColor = 'black';

let canDraw = false;

let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');

//Events
document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);

/*
Passo a passo para desenhar no canvas:
- Quando o click do mouse estiver abaixado, ative o modo desenho;
- Quando o mouse se mover, caso o modo desenho esteja ativado, desenhe;
- Quando o click do mouse levantar, desative o modo desenho.
*/

//Functions
function colorClickEvent(e) {
   let color = e.target.getAttribute('data-color');
   currentColor = color;
   
   document.querySelector('.color.active').classList.remove('active');
   e.target.classList.add('active');
};

function mouseDownEvent(e) {
    canDraw = true;
    //Posição anterior:
    mouseX = e.pageX - screen.offSetLeft;
    mouseY = e.pageY - screen.offSetTop;
    /* 
    pageX - posição horizontal
    pageY - posição vertical
    offSetLeft - distancia do elemento até a esquerda da tela
    */
};

function mouseMoveEvent(e) {
    if(canDraw) {
        draw(e.pageX, e.pageY);
    };
};

function mouseUpEvent() {
    canDraw = false;
};

function draw(x, y) {
    //Posição posterior:
    let pointX = x - screen.offSetLeft;
    let pointY = y - screen.offSetTop;

    //Desenhar:
    context.beginPath();
    context.lineWidth = 5;
    context.lineJoin = "round";
    context.moveTo(mouseX, mouseY);
    context.lineTo(pointX, pointY);
    context.closePath();
    context.strokeStyle = currentColor;
    context.stroke();

    mouseX = pointX;
    mouseY = pointY;
};

function clearScreen() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.heigth)
};

