// Função de inicialização do mapa
function initMap() {
    // Crie um objeto Map
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  
    // Crie um marcador no mapa
    var marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map,
      title: 'Meu Marcador'
    });
  }