let userLocation = null;

function requestTaxi() {
    const destination = document.getElementById('destination').value;

    if (!userLocation) {
        alert("No se ha obtenido tu ubicación. Por favor, intenta de nuevo.");
        return;
    }

    if (!destination) {
        alert("Por favor, ingresa un destino.");
        return;
    }

    // Calcular tarifa basada en la zona del destino
    const fare = calculateFare(destination);
    document.getElementById('estimatedFare').innerText = `$${fare}`;

    // Generar un código de taxi único
    const taxiCode = generateTaxiCode();
    document.getElementById('taxiCode').innerText = taxiCode;

    // Simulación del tiempo de llegada del taxi (en segundos)
    const arrivalTime = Math.floor(Math.random() * 10) + 5; // entre 5 y 15 minutos
    document.getElementById('arrivalTime').innerText = `${arrivalTime} minutos`;
}

// Función que calcula la tarifa en función del destino
function calculateFare(destination) {
    // Ejemplo de cómo podrías calcular las tarifas según la zona
    const zone1 = ["Homecenter", "Parque Nacua", "Pueblito Llanero"];
    const zone2 = ["Elmetrans", "Villa David", "Cementerio"];

    if (zone1.includes(destination)) {
        return 7500; // Zona 1
    } else if (zone2.includes(destination)) {
        return 8500; // Zona 2
    } else {
        return 6500; // Tarifa mínima por defecto
    }
}

// Función para generar un código de taxi único
function generateTaxiCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Obtener la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        };
        document.getElementById('locationStatus').innerText = `Lat: ${userLocation.latitude}, Lon: ${userLocation.longitude}`;
    }, () => {
        document.getElementById('locationStatus').innerText = 'No se pudo obtener la ubicación.';
    });
} else {
    document.getElementById('locationStatus').innerText = 'Geolocalización no soportada en tu navegador.';
}
