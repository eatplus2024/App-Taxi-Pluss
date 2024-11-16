document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
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
});
