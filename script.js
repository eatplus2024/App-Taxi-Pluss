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

function applyDynamicStyles() {
    const styleElement = document.getElementById("dynamic-style");
    styleElement.textContent = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            text-align: center;
        }

        #main-title {
            font-size: 24px;
            margin: 20px 0;
            color: #333;
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
            padding: 10px 15px;
            font-size: 18px;
            border: 3px solid #00ffcc;
            border-radius: 30px;
            outline: none;
            transition: 0.3s ease;
        }

        #searchInput:focus {
            box-shadow: 0 0 15px #00ffcc;
        }

        #resetBtn {
            position: absolute;
            right: 10px;
            border: none;
            background: transparent;
            font-size: 18px;
            color: #00ffcc;
            cursor: pointer;
        }

        button {
            margin: 10px 0;
            padding: 10px 20px;
            background-color: #00ffcc;
            border: none;
            border-radius: 20px;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
            transition: transform 0.2s ease;
        }

        button:hover {
            transform: scale(1.05);
        }

        #gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
        }

        #gallery img {
            width: 100px;
            height: auto;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #gallery img:hover {
            transform: scale(1.1);
            box-shadow: 0 0 15px #00ffcc;
        }

        footer {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
        }
    `;
}

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

window.onload = () => {
    applyDynamicStyles();
    displayImages(images);
};
