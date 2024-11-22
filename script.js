const images = [
    { id: 1, url: "https://via.placeholder.com/150?text=Montaña", keywords: ["montaña", "naturaleza", "paisaje"] },
    { id: 2, url: "https://via.placeholder.com/150?text=Ciudad", keywords: ["ciudad", "noche", "luces"] },
    { id: 3, url: "https://via.placeholder.com/150?text=Playa", keywords: ["playa", "mar", "vacaciones"] },
    { id: 4, url: "https://via.placeholder.com/150?text=Bosque", keywords: ["bosque", "árboles", "verde"] },
    { id: 5, url: "https://via.placeholder.com/150?text=Río", keywords: ["río", "agua", "paisaje"] }
];

function displayImages(imageList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No se encontraron imágenes.</p>";
    } else {
        imageList.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.url;
            imgElement.alt = image.keywords.join(", ");
            imgElement.classList.add("thumbnail");
            gallery.appendChild(imgElement);
        });
    }
}

function searchImages() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredImages = images.filter(image => 
        image.keywords.some(keyword => keyword.includes(searchTerm))
    );
    displayImages(filteredImages);
}

function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

window.onload = () => displayImages(images);
