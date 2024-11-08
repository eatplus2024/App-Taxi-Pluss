const images = [
  { name: "Atardecer en las montañas", keywords: ["montaña", "atardecer", "naturaleza"], url: "https://pixabay.com/es/photos/atardecer-oscuridad-monta%C3%B1as-nubes-8516639/" },
  { name: "Pájaro azul en el cielo", keywords: ["pájaro", "azul", "naturaleza"], url: "https://pixabay.com/es/photos/p%C3%A1jaro-azul-nubes-tiempo-bol%C3%ADgrafo-8788491/" },
  { name: "Bandera de género", keywords: ["bandera", "género", "mujer"], url: "https://pixabay.com/es/illustrations/bandera-fondo-mujer-g%C3%A9nero-mujer-4887650/" },
  { name: "Retrato de mujer", keywords: ["mujer", "retrato", "modelo"], url: "https://pixabay.com/es/photos/mujer-retrato-modelo-peinado-837156/" },
  { name: "Playa con olas", keywords: ["playa", "agua", "olas"], url: "https://pixabay.com/es/photos/playa-ondas-costa-horizonte-mar-8563083/" },
  { name: "Costa y paisaje", keywords: ["costa", "mar", "naturaleza"], url: "https://pixabay.com/es/photos/costa-mar-playa-paisaje-naturaleza-7338147/" }
];

function buscarImagen() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const resultsBoard = document.getElementById('resultsBoard');
  resultsBoard.innerHTML = ''; // Limpiar resultados previos
  resultsBoard.style.display = 'none'; // Ocultar tablero inicialmente
  
  // Buscar coincidencias
  const results = images.filter(image =>
    image.keywords.some(keyword => keyword.includes(query))
  );

  if (results.length > 0) {
    results.forEach(image => {
      const button = document.createElement('a');
      button.className = 'result-btn';
      button.href = image.url;
      button.target = '_blank';
      button.textContent = image.name;
      resultsBoard.appendChild(button);
    });
    resultsBoard.style.display = 'block'; // Mostrar tablero con resultados
  } else {
    resultsBoard.innerHTML = '<p>No se encontraron resultados.</p>';
    resultsBoard.style.display = 'block';
  }
}
