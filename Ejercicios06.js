
const ListadeCompras = ["Azucar", "Pápa", "Arroz", "Cebolla","Tomate"]

ListadeCompras.push("Aceite de Girasol")
console.log(ListadeCompras)

ListadeCompras.pop()
console.log(ListadeCompras)

const PeliculasFavoritas = [

    {titulo: "Hasta el ultimo hombre", director: "Mel Gibson", fecha:"04-11-2016" },
    {titulo: "La razón de estar contigo", director:"Lasse Hallström", fecha:"27-01-2017"},
    {titulo:"Soul", director:"Pete Docter", fecha: "25-12-2020"}
]

const PeliculasViejas = PeliculasFavoritas.filter(pel => pel.fecha > "01-01-2010")

console.log(PeliculasViejas)

const directores = PeliculasFavoritas.map((name)=> name.director)

console.log(directores)

const Peliculas = PeliculasFavoritas.map((nombres)=> nombres.titulo)

console.log(Peliculas)

const TYP = directores.concat(Peliculas)
console.log(TYP)

const TYPP = [...directores, ...Peliculas]
console.log(TYPP)
