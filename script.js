// Selección de elementos
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

// Agregar evento al botón de búsqueda
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim(); // Obtener el texto del input

  if (query) {
    alert(`Buscando: ${query}`); // Acción básica, puede ser reemplazada
  } else {
    alert('Por favor, ingresa una palabra clave para buscar.');
  }
});
