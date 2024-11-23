const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        keywords: ["agua", "río", "mar"],
        link: "https://unsplash.com/photos/e9df14d4d9d0"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1557682263-7056e2d2235d",
        keywords: ["naturaleza", "bosque", "verde"],
        link: "https://unsplash.com/photos/7056e2d2235d"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        keywords: ["playa", "mar", "vacaciones"],
        link: "https://unsplash.com/photos/b723cf961d3e"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1545286987-4a3bfb09dfc2",
        keywords: ["montaña", "paisaje", "nieve"],
        link: "https://unsplash.com/photos/4a3bfb09dfc2"
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        keywords: ["ciudad", "urbano", "edificios"],
        link: "https://unsplash.com/photos/e9df14d4d9d0"
    }
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
        const anchorElement = document.createElement("a");
        anchorElement.href = image.link;
        anchorElement.target = "_blank"; // Opens the link in a new tab

        const imgElement = document.createElement("img");
        imgElement.src = `${image.url}?w=300&h=200&fit=crop`;
        imgElement.alt = image.keywords.join(", ");

        anchorElement.appendChild(imgElement);
        gallery.appendChild(anchorElement);
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
