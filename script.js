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
        gallery.innerHTML = "<p>No se encontraron imágenes relacionadas.</p>";
        return;
    }

    imageList.forEach(image => {
        const img = document.createElement("img");
        img.src = image.url;
        img.alt = image.keywords.join(", ");
        img.className = "thumbnail";
        gallery.appendChild(img);
    });
}

function searchImages() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!query) {
        alert("Por favor, introduce una palabra clave.");
        return;
    }

    const results = images.filter(image =>
        image.keywords.some(keyword => keyword.includes(query))
    );

    displayImages(results);
}

function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

window.onload = () => {
    displayImages(images);
};
