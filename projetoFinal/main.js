function createMenu(){
    let navTag = document.createElement("nav");
    document.body.appendChild(navTag);
    let buttonTag = document.createElement("button");
    navTag.appendChild(buttonTag);
    let imgTag = document.createElement("img");
    buttonTag.appendChild(imgTag);
    imgTag.src = "images/exitMenu.png";
    imgTag.alt = "Fechar menu";
    let olTag = document.createElement("ol");
    navTag.appendChild(olTag);
    let liTags = [];
    let aTags = [];
    for (let i = 1; i <= 6; i++) {
        let liTag = document.createElement('li');
        let aTag = document.createElement('a');
        liTags.push(liTag);
        aTags.push(aTag);
        olTag.appendChild(liTag);
        liTag.appendChild(aTag);
    }
    let links = [
        "planoseservicos.html",
        "pagamentoonline.html",
        "nossasunidades.html",
        "artigosfunerarios.html",
        "velorioonline.html",
        "faleconosco.html"
    ]
    let text = [
        "Planos e serviços",
        "Pagamento online",
        "Nossas unidades",
        "Artigos funerários",
        "Velório online",
        "Fale conosco"
    ]
    aTags.forEach((aTag, index) => {
        aTag.href = links[index];
        aTag.textContent = text[index];
    }); 
    buttonTag.addEventListener("click", function() {
        navTag.remove();
        menuElement = null;
    });
    return {navTag, olTag, liTags, aTags};
}
function main(){
    let menuElement = null;
    let menuHamburguer = document.querySelector("div#container header div button");
    if (menuHamburguer){
        menuHamburguer.addEventListener("click", function(){
            if (menuElement) {
                menuElement.navTag.remove();
                menuElement = null;
            } else {
                menuElement = createMenu();
                document.body.insertBefore(menuElement.navTag, document.body.firstChild);
            }
        });
    }
};
function mapa(){
    let map = L.map('map').setView([-5.7945, -35.2110], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([-5.7945, -35.2110]).addTo(map)
        .bindPopup('Natal')
        .openPopup();
}
function mapControl() {
    let controlMap = document.getElementById("controledomapa");
    let mapID = document.getElementById("map");
    if (!mapID || !controlMap) return;
    window.addEventListener("scroll", function () {
        let mapaRect = mapID.getBoundingClientRect();
        let mapHeight = mapaRect.height;
        let hideThreshold = mapaRect.top + mapHeight * 0.15;
        if (hideThreshold < 0) {
            controlMap.classList.add("hidden");
        } else {
            controlMap.classList.remove("hidden");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    main();
    mapa();
    mapControl();
});
