 const Family = ["Vilma", "Javi", "David", "iris", "Marisol", "Brian"]
 const miFamily = new Set(Family)
 //Compruebo que sea un set
 console.log(miFamily)


 //Le añado mi nombre por duplicado(Brian)
 miFamily.add("Brian")
 console.log(miFamily)

 //Modifico y añado "Javascript"

miFamily.add("Javascript")
console.log(miFamily)