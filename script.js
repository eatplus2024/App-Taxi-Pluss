// Detectar dispositivo móvil y enfocar automáticamente el campo de búsqueda
function autoFocusSearchInput() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const searchInput = document.getElementById("searchInput");

    if (isMobile && searchInput) {
        searchInput.focus();
    }
}

const images = [
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_f9c96ee36ee747a2a8e8da2d1ec9b0a1~mv2.png",
        keywords: ["taxi", "Taxis", "taxis"],
        link: "https://eatcomercial01.wixsite.com/website-1/turitaxis",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_04ad6e3130d04f4dada287584d18cf01~mv2.png",
        keywords: ["muebles", "cama", "colchon"],
        link: "https://unsplash.com/",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png",
        keywords: ["domiciliario", "domicilio", "comida"],
        link: "https://unsplash.com/",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png",
        keywords: ["turisticos", "cafe", "restaurante"],
        link: "https://unsplash.com/",
    },
];

// Mostrar el indicador de carga
function showLoadingIndicator() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = `
        <div id="loading-indicator" style="text-align: center; margin-top: 50px;">
            <div style="width: 50px; height: 50px; border: 5px solid #ccc; border-top: 5px solid #00ffcc; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
            <p style="color: #333; font-size: 16px;">Buscando...</p>
        </div>
    `;
}

// Ocultar el indicador de carga
function hideLoadingIndicator() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
}

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

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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
            max-width: 150px;
            height: auto;
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

// Mostrar imágenes en la galería
function displayImages(imageList) {
    hideLoadingIndicator();
    const gallery = document.getElementById("gallery");

    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    imageList.forEach((image) => {
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

// Buscar imágenes
function searchImages() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    showLoadingIndicator(); // Mostrar cargando

    setTimeout(() => {
        // Simulación de búsqueda con un pequeño retraso
        const filteredImages = images.filter((image) =>
            image.keywords.some((keyword) => keyword.toLowerCase() === query)
        );

        displayImages(filteredImages); // Mostrar resultados
    }, 1000); // Simula un retraso de 1 segundo
}

// Restaurar la galería a su estado inicial
function resetGallery() {
    document.getElementById("searchInput").value = "";
    document.getElementById("gallery").innerHTML = "<p>Usa la barra de búsqueda para ver imágenes.</p>";
}

// Inicializar la aplicación
window.onload = () => {
    applyDynamicStyles();
    resetGallery();
    autoFocusSearchInput();
};
