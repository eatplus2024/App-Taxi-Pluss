// Detectar dispositivo móvil y enfocar automáticamente el campo de búsqueda
function autoFocusSearchInput() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // Detectar si es un dispositivo móvil
    const searchInput = document.getElementById("searchInput");

    if (isMobile && searchInput) {
        searchInput.focus();
    }
}

const images = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
        keywords: ["restaurante", "comida", "agua"],
        link: "https://unsplash.com/"
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

// Aplicar estilos dinámicos
function applyDynamicStyles() {
    const styleElement = document.getElementById("dynamic-style");
    styleElement.textContent = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        #main-title {
            color: #444;
            font-size: 28px;
            margin: 20px 0;
        }

        .search-container {
            margin: 20px auto;
            width: 90%;
            max-width: 600px;
        }

        #search-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 10px;
        }

        #searchInput {
            flex: 1;
            padding: 15px 20px;
            font-size: 18px;
            border: 2px solid #00ffcc;
            border-radius: 25px;
            outline: none;
            background: #fff;
            color: #333;
            transition: box-shadow 0.3s ease;
        }

        #searchInput:focus {
            box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
        }

        #resetBtn {
            position: absolute;
            right: 10px;
            background: none;
            border: none;
            color: #00ffcc;
            font-size: 18px;
            cursor: pointer;
            outline: none;
        }

        #resetBtn:hover {
            color: #007f66;
        }

        .search-container button {
            background-color: #00ffcc;
            border: none;
            border-radius: 25px;
            padding: 12px 20px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .search-container button:hover {
            background-color: #007f66;
            transform: scale(1.05);
        }

        #gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 30px auto;
            width: 90%;
        }

        #gallery img {
            max-width: 150px; /* Tamaño ajustado */
            height: auto; /* Mantener proporción */
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #gallery img:hover {
            transform: scale(1.1);
            box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
        }

        footer {
            background-color: #111;
            color: #00ffcc;
            padding: 10px;
            font-size: 14px;
            text-align: center;
        }
    `;
}

// Mostrar imágenes
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
        img.src = image.url;
        img.alt = image.keywords.join(", ");

        anchor.appendChild(img);
        gallery.appendChild(anchor);
    });
}

// Función para buscar imágenes
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

// Restaurar galería
function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

// Iniciar aplicación
window.onload = () => {
    applyDynamicStyles();
    displayImages(images);
    autoFocusSearchInput(); // Llamar a la función de autoenfoque
};
