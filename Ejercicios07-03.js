//fecha de hoy
const fechaHoy= new Date()
console.log(fechaHoy)
// Fecha de nacimiento completa
const fechaNacimiento= new Date("July 28, 2001")
console.log(fechaNacimiento)
//Comparativa de hoy y mi fecha de nacimiento
const MaOme = fechaHoy > fechaNacimiento
console.log(MaOme)
//Variable que contenga el día de mi nacimiento
const DiaNaci = fechaNacimiento.getDate()
console.log(DiaNaci)
//Variable que contenga el mes de mi nacimiento
const MesNaci = fechaNacimiento.getMonth()+1
console.log(MesNaci)
//Variable que contenga el año de tu nacimiento
const AñoNaci = fechaNacimiento.getFullYear()
console.log(AñoNaci)

