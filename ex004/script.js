function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal-name', animalname);
}

function qualAnimal() {
    let nome = document.querySelector('.imagem').getAttribute('data-animal-name');

    window.alert('O animal é um '+nome);
}
