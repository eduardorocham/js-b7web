function mostrar() {
    let image = document.getElementById("imagem").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
}