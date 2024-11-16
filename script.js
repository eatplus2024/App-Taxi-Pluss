document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    if (query.trim() !== '') {
        alert(`You searched for: "${query}"`);
    } else {
        alert("Please enter a search term!");
    }
});
