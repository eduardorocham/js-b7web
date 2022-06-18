//Executar a função 'playSound' ao clicar na tecla:
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase()); 
});

document.querySelector('.composer button').addEventListener('click', (event)=>{
    let song = document.querySelector('#input').value;

    if(song != '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    //Selecionar áudio:
    let audioElement = document.querySelector(`#s_${sound}`);

    //Tecla:
    let keyElement = document.querySelector(`div[data-key=${sound}]`);

    //tocar o áudio:
    if(audioElement) {
        audioElement.currentTime = 0; //Volta o áudio pro ínicio
        audioElement.play();
    } //Caso eu tenha encontrado
    
    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
};

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250; //Diferença de tempo que cada letra será tocada
    }
}