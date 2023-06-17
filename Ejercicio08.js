


function Verdad(){
    console.log(true)
}

Verdad()


const Hola= function() {
    setTimeout(function(){
        console.log("Hola soy la promesa atrasada")
    },5000)
}



const miHola = new Promise((Rechazo)=>{
    if(true){
        Rechazo()
        return console.log(Hola())
    } 
    
})

miHola
.then(()=> console.log("Hola soy una pomesa"))
.finally(()=>console.log("Ya me ejecuté"));


function* generador(){
    let var1 = 0;
    while (true){
     var1++
     var1++
    if (var1 == 20){
    return var1}
    console.log("hemos terminado")
    yield var1;
    
}
}

const gen = generador();


console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
