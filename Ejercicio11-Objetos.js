
class Estudiante {
    constructor(nombre,asignaturas){
        this.nombre =nombre
        this.asignaturas = asignaturas
    }
    obtenDatos() {
        console.log(this.nombre, this.asignaturas)
    }
}

const Wachin = new Estudiante("Brian","Javascript, HTML, CSS" )

console.log(Wachin)
Wachin.obtenDatos()



