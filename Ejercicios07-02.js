//Objeto que contenga datos personales
const Yo = {
    nombre:"Brian",
    apellido:"Godoy",
    edad:21,
    altura:1.74,
    eresDesarrollador:true
}

//Variable que obtenga mi edad
let miEdad = Yo.edad
console.log(miEdad)

//Lista con amigos
const listaAmigos = [
{nombre:"Brian", apellido:"Godoy",edad:21,altura:1.74,eresDesarrollador: true},
{nombre:"Facundo",apellido:"Gonzalez",edad:22,altura:176,eresDesarrollador:false},
{nombre:"Braian",apellido:"Lopez",edad:23,altura:172,eresDesarrollador:false}
]

const listaOrdenada = listaAmigos.sort((a,b )=> b.edad - a.edad)

console.log(listaOrdenada)