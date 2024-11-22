const imagesData = [
    { id: 1, url: "https://via.placeholder.com/150", keywords: ["naturaleza", "montaña"] },
    { id: 2, url: "https://via.placeholder.com/150", keywords: ["ciudad", "noche"] },
    { id: 3, url: "https://via.placeholder.com/150", keywords: ["playa", "mar"] },
    { id: 4, url: "https://via.placeholder.com/150", keywords: ["bosque", "árboles"] }
];

function searchImages() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const galleryContainer = document.getElementById("galleryContainer");
    galleryContainer.innerHTML = "";

    const filteredImages = imagesData.filter(image =>
        image.keywords.some(keyword => keyword.includes(searchTerm))
    );

    if (filteredImages.length > 0) {
        filteredImages.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.url;
            imgElement.alt = `Image ${image.id}`;
            imgElement.className = "thumbnail";
            galleryContainer.appendChild(imgElement);
        });
    } else {
        galleryContainer.innerHTML = "<p>No se encontraron imágenes</p>";
    }
}
