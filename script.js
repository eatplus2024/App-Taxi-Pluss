document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll(".section");
    
    sections.forEach((section) => {
        let matches = 0;
        const cards = section.querySelectorAll(".image-card");
        cards.forEach((card) => {
            const name = card.getAttribute("data-name").toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = "block";
                matches++;
            } else {
                card.style.display = "none";
            }
        });
        section.style.display = matches > 0 ? "block" : "none";
    });
});
