const parrafos = document.querySelectorAll(".parrafo")
const secciones= document.querySelectorAll(".seccion")
const papeleras = document.querySelector(".papelera")
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event =>{
        console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el parrafo" +  parrafo.innerText)
    parrafo.classList.add("dragging")
    event.dataTransfer.setData("id", parrafo.id)
    const imagenf = document.querySelector(".img-f")
    event.dataTransfer.setDragImage(imagenf,0,0)
    })
    parrafo.addEventListener("dragend" , event => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
        })

})
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event  => {
        event.preventDefault()
    //    console.log("drag over")

    })
    seccion.addEventListener("drop", event => {
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)   
    })
})

papeleras.addEventListener("dragenter", e => {
    console.log("drag enter")
})
papeleras.addEventListener("dragover", e => {
    e.preventDefault()
    console.log("drag over")
})
papeleras.forEach(papelera => {
papeleras.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        papelera.appendChild(parrafo) 
    
})
})

