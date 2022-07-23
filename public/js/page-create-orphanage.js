//create map
const map = L.map('mapid').setView([-23.3895968,-49.5103191], 16);

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
let marker;

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('name=lng').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon
    marker = L.marker([lat, lng], { icon }).addTo(map)
})


//add photo field
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')

    //pegar container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar clone do ultimo upload adicionado
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar campo vazio
    newFieldContainer.children[0].

    //Limpar campo input antes de adicionar
    newFieldContainer.children[0].value = ""

    //adicionar container
    container.appendChild(newFieldContainer)
}