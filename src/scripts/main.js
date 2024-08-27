// Função que inicializa o mapa
function initMap() {
    // Verifica se a Geolocalização está disponível no navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Cria o mapa centrado na localização do usuário
            var map = new google.maps.Map(document.getElementById('map'), {
                center: userLocation,
                zoom: 14
            });

            // Coloca um marcador na localização do usuário
            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Você está aqui!'
            });

        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Se a Geolocalização não estiver disponível, mostra uma mensagem de erro
        handleLocationError(false, map.getCenter());
    }
}

// Função que lida com erros de Geolocalização
function handleLocationError(browserHasGeolocation, pos) {
    alert(browserHasGeolocation
        ? 'Erro: Falha ao obter a localização.'
        : 'Erro: Seu navegador não suporta Geolocalização.');
}