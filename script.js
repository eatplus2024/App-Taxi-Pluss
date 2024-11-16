document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('#search').value;
    if (query) {
        alert(`Searching for: "${query}"`);
    } else {
        alert("Please type something to search!");
    }
});
