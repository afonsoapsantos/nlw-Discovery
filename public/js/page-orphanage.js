const options = {

    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

//create map
const map = L.map('mapid', options ).setView([-23.3895968,-49.5103191], 16);

//create tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [ 58, 68 ],
    iconAnchor: [ 29, 68 ],
    popupAnchor: [ 170, 2 ]
})

//create and marker
L.marker([-23.3895968,-49.5103191], { icon }).addTo(map);

//image Gallery

function selectImage(event) {
    const button = event.currentTarget

    //Remover classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach( (button) => {
        button.classList.remove("active")
    })

    //selecionar a image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de image
    imageContainer.src = image.src

    //adicionar a class .active no selecionado
    button.classList.add("active")
}