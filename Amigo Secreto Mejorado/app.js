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

function sortearAmigo() {
    if (listaAmigosSecretos.length > 0) {
        let amigoSorteado = listaAmigosSecretos[Math.floor(Math.random()*listaAmigosSecretos.length)];
        let indiceAmigo = listaAmigosSecretos.indexOf(amigoSorteado);
        listaAmigosSecretos.splice(indiceAmigo, 1);
        if (confirm(`Su amigo secreto es ${amigoSorteado}. Click en Aceptar y pase el computador a otro amigo. Luego espere 7 segundos`)) {
            setTimeout(function () {
                if (listaAmigosSecretos.length-1 > 0) {
                    sortearAmigo();
                } else {
                    alert (`Su Amigo secreto es ${amigoSorteado}. Click en Aceptar`);
                    alert('Se acabaron los Nombres en la lista');
                }
            }, 7000);
        }
    } else {
        alert('No hay Nombres para Sortear');
    }
}