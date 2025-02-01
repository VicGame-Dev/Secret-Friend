// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];

function agregarAmigo(nombreAmigo) {
    nombreAmigo = document.querySelector('#amigo').value;
    if (nombreAmigo == "") {
        alert('Por favor, inserte un nombre')
    } else {
        listaAmigosSecretos.push(nombreAmigo);
        console.log(listaAmigosSecretos);
        casillaEnBlanco("");
        listaAmigosVisible(cantidadAmigo = listaAmigosSecretos.length);
    }
}

function casillaEnBlanco(texto) {
    document.querySelector('#amigo').value = texto;
}

function listaAmigosVisible(cantidadAmigo) {
    let listaDeAmigosUsuario = document.querySelector('#listaAmigos');
    listaDeAmigosUsuario.innerHTML = "";
    for (let i = 0 ; i < cantidadAmigo ; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = listaAmigosSecretos[i];
        listaDeAmigosUsuario.appendChild(listItem);
    }
}