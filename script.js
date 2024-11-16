document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('#search').value;
    alert(`You searched for: ${query}`);
});
