function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const title = section.getAttribute('data-category');
        const items = section.querySelectorAll('.gallery-item');

        let matchFound = false;
        items.forEach(item => {
            const itemTitle = item.getAttribute('data-title').toLowerCase();
            if (itemTitle.includes(input) || title.includes(input)) {
                item.style.display = 'inline-block';
                matchFound = true;
            } else {
                item.style.display = 'none';
            }
        });

        section.style.display = matchFound ? 'block' : 'none';
    });
}
