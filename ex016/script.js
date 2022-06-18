function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json) {
            montarBlog(json);
        })
        .catch(function(erro) {
            console.log('Deu erro!');
        });
}

function montarBlog(lista) {
    let html = '';

    for(let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body;
        html += '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;
}

