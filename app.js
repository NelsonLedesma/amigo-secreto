// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para guardar Amigos
let amigos = [];

//Funcion para agregar amigos

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();


    //validar que el campo no este vacio
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre.");
        return;  //detiene la funcion si el usuario no carga ningun nombre
    }

    //Validar que el nombre no este repetido
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya esta en la lista`);
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";

    //actualizar la lista en el html
    actualizarLista();


}

//Funcion para actualizar la lista de Amigos
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //borra cualquier contenido dentro del contenedor de la lista

    //recorre el array con un for
    for(let i =0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //validar que haya amigos disponibles
    if(amigos.length === 0){
        alert("No hay amigos disponibles para poder sortear. Agrega al menos uno.");
        return;
    }

    //genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);//genera un numero entre cero y la longitud del array

    //obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //usa el indice aleatorio para obtener un nombre del array

    //mostrar el resultado en el html
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
}