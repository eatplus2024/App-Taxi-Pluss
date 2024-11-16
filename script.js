// Lista de imágenes
const images = [
    { name: "Playa", src: "https://example.com/playa.jpg", link: "https://example.com" },
    { name: "Montaña", src: "https://example.com/montana.jpg", link: "https://example.com" },
    { name: "Bosque", src: "https://example.com/bosque.jpg", link: "https://example.com" },
    // Agrega más imágenes aquí
];

// Renderiza las imágenes en la galería
const gallery = document.getElementById("gallery");
images.forEach((image) => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
        <img src="${image.src}" alt="${image.name}" />
        <p>${image.name}</p>
    `;
    card.addEventListener("click", () => {
        window.open(image.link, "_blank");
    });
    gallery.appendChild(card);
});

// Búsqueda en tiempo real
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll(".image-card").forEach((card) => {
        const name = card.querySelector("p").textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? "block" : "none";
    });
});
