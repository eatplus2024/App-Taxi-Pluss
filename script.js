let userLocation = null;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            };
            document.getElementById('location').textContent = `Ubicación: ${userLocation.latitude}, ${userLocation.longitude}`;
        });
    } else {
        alert('La geolocalización no es soportada por tu navegador.');
    }
}

function requestTaxi() {
    const destination = document.getElementById('destination').value;
    if (!userLocation) {
        alert("Por favor, espera a que se obtenga tu ubicación.");
        return;
    }

    if (!destination) {
        alert("Por favor, ingresa un destino.");
        return;
    }

    document.getElementById('destinationDisplay').textContent = `Destino: ${destination}`;

    const message = `Solicitud de taxi:\nUbicación: ${userLocation.latitude}, ${userLocation.longitude}\nDestino: ${destination}`;

    const whatsappNumber = "+123456789"; // El número de WhatsApp del taxi o central.
    const whatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsAppUrl, '_blank');
}

// Ejecutar cuando cargue la página para obtener la ubicación del usuario.
window.onload = getLocation;
