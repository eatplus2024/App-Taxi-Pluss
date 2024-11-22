const images = [
    { id: 1, url: "https://via.placeholder.com/300?text=Naturaleza", keywords: ["naturaleza", "verde", "árboles"] },
    { id: 2, url: "https://via.placeholder.com/300?text=Agua", keywords: ["agua", "río", "mar"] },
    { id: 3, url: "https://via.placeholder.com/300?text=Playa", keywords: ["playa", "vacaciones", "arena"] },
    { id: 4, url: "https://via.placeholder.com/300?text=Ciudad", keywords: ["ciudad", "urbano", "edificios"] },
    { id: 5, url: "https://via.placeholder.com/300?text=Montaña", keywords: ["montaña", "nieve", "paisaje"] }
];

// Function to display all images
function displayImages(imageList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No se encontraron imágenes relacionadas.</p>";
        return;
    }

    imageList.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image.url;
        imgElement.alt = image.keywords.join(", ");
        gallery.appendChild(imgElement);
    });
}

// Search for images based on keywords
function searchImages() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!query) {
        alert("Por favor, introduce una palabra clave.");
        return;
    }

    const filteredImages = images.filter(image =>
        image.keywords.some(keyword => keyword.includes(query))
    );

    displayImages(filteredImages);
}

// Reset the gallery to show all images
function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

// Initial display of all images
window.onload = () => {
    displayImages(images);
};
