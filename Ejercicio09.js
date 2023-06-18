const logger = require("./logger")

console.log("Ya empece we")

const miFunc = val => {
    if(typeof val=== "number"){
    return val / 2 + 10}
    throw new Error("Poné un número pibe")
} 

const numero= "10";

try {
    const miDiv = miFunc(numero)
    console.log(miDiv)
    console.log("Funciona bien")
}
catch(e){
    console.error("Ta mal esto")
} finally {
    console.log("Ya terminamos wey")
}
