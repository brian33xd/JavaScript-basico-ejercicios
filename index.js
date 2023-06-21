let markers= [];
function initMap() {
    
    const Survive = { lat: -34.808174213157074, lng: -58.27785960383315 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: Survive,
    });
    
    const marker = new google.maps.Marker({
    position: Survive,
    map: map,
    title:"El survive"
    });

    markers.push (
        new google.maps.Marker({
        position: {
            lat:-31.26565908687703 ,
            lng:-64.45504988784285
        },
        map,
        title:"Cosquín"
    })
)
markers.push (
    new google.maps.Marker({
    position: {
        lat:-31.419084499553968 ,
        lng:-64.52169793955048
    },
    map,
    title:"Carlos Paz"
})
)
markers.push (
    new google.maps.Marker({
    position: {
        lat:-36.48859175262997 ,
        lng:-56.704887471450064
    },
    map,
    title:"Las toninas"
})
)}

