let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() {
    //Relógio digital:
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    //Relógio analógico:

    //Ponteiro dos segundos:
    let sDeg = (360/60 * seconds) - 90; //Ângulo do ponteiro
    sElement.style.transform = `rotate(${sDeg}deg)`;

    //Ponteiro dos minutos:
    let mDeg = (360/60 * minutes) - 90; //Ângulo do ponteiro
    mElement.style.transform = `rotate(${mDeg}deg)`;

    //Ponteiro das horas:
    let hDeg = (360/12 * hour) - 90; //Ângulo do ponteiro
    hElement.style.transform = `rotate(${hDeg}deg)`;
};

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
};

setInterval(updateClock, 1000);
updateClock(); /*Não demorar 1seg para executar a função quando a página for atualizada*/