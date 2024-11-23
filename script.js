const images = [
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_7103def731ef4200a908196b2caa19fc~mv2.png/v1/fill/w_600,h_495,al_c,q_85,enc_auto/a4f6c8_7103def731ef4200a908196b2caa19fc~mv2.png", // Nuevo enlace de imagen
        keywords: ["restaurante", "comida", "agua"],
        link: "https://eatcomercial01.wixsite.com/website-1/informaci%C3%B3n-deliplan-2024" // Enlace al sitio web principal
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1557682263-7056e2d2235d",
        keywords: ["hotel", "naturaleza", "bosque"],
        link: "https://unsplash.com/"
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        keywords: ["playa", "mar", "vacaciones"],
        link: "https://unsplash.com/"
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1545286987-4a3bfb09dfc2",
        keywords: ["peluquería", "ciudad", "urbano"],
        link: "https://unsplash.com/"
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
        anchor.href = image.link; // Apunta al sitio web principal
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = `${image.url}?w=300&h=200&fit=crop&timestamp=${new Date().getTime()}`; // Añadimos timestamp para evitar caché
        img.alt = image.keywords.join(", ");
        img.style.width = "60%"; // Ancho de miniatura
        img.style.maxWidth = "300px"; // Tamaño máximo para pantallas grandes
        img.style.height = "auto"; // Mantiene proporciones
        img.style.margin = "10px auto"; // Añade espacio entre imágenes

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
