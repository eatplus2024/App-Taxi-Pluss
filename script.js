// Initialize image data
const images = [
    {
        src: "https://static.wixstatic.com/media/a4f6c8_7103def731ef4200a908196b2caa19fc~mv2.png/v1/fill/w_600,h_495,al_c,q_85,enc_auto/a4f6c8_7103def731ef4200a908196b2caa19fc~mv2.png",
        alt: "Celebration",
        link: "https://eatcomercial01.wixsite.com/website-1/informaci%C3%B3n-deliplan-2024"
    },
    {
        src: "https://cdn.pixabay.com/photo/2024/08/31/18/47/deliplan-9012182__340.png",
        alt: "DeliPlan Logo",
        link: "https://pixabay.com/"
    }
];

// Populate the gallery with all images initially
const gallery = document.getElementById("gallery");
function populateGallery(imagesToShow) {
    gallery.innerHTML = ""; // Clear current gallery content
    imagesToShow.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.onclick = () => window.open(image.link, "_blank");
        gallery.appendChild(img);
    });
}

// Search function
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredImages = images.filter((img) =>
        img.alt.toLowerCase().includes(query)
    );
    populateGallery(filteredImages);
});

// Reset gallery to show all images
document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("searchInput").value = "";
    populateGallery(images);
});

// Initialize the page
populateGallery(images);
