const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
        keywords: ["restaurante", "comida", "agua"],
        link: "https://unsplash.com/photos/e9df14d4d9d0"
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1557682263-7056e2d2235d",
        keywords: ["hotel", "naturaleza", "bosque"],
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
        keywords: ["peluquería", "ciudad", "urbano"],
        link: "https://unsplash.com/photos/4a3bfb09dfc2"
    }
];

function displayImages(imageList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No se encontraron imágenes relacionadas.</p>";
        return;
    }

    imageList.forEach(image => {
        const anchor = document.createElement("a");
        anchor.href = image.link;
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = `${image.url}?w=300&h=200&fit=crop`;
        img.alt = image.keywords.join(", ");

        anchor.appendChild(img);
        gallery.appendChild(anchor);
    });
}

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

function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

window.onload = () => displayImages(images);
