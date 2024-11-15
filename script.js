// Selección de elementos
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

// Agregar evento al botón de búsqueda
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();

  if (query) {
    alert(`Buscando: ${query}`);
  } else {
    alert('Por favor, escribe algo para buscar.');
  }
});
