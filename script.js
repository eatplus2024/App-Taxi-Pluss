document.getElementById("search-button").addEventListener("click", function () {
    const query = document.getElementById("search").value.toLowerCase();
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        const cards = section.querySelectorAll(".image-card");
        let sectionHasMatch = false;

        cards.forEach(card => {
            const name = card.getAttribute("data-name").toLowerCase();
            if (name.includes(query)) {
                card.style.display = "block";
                sectionHasMatch = true;
            } else {
                card.style.display = "none";
            }
        });

        section.style.display = sectionHasMatch ? "block" : "none";
    });

    // Ajustar buscador al realizar la búsqueda
    document.querySelector(".search-container").style.position = "absolute";
    document.querySelector(".search-container").style.top = "10px";
    document.querySelector(".search-container").style.transform = "none";
});
