/* LISTA DE IMAGENES PARA REPRODUCIR CON LA FUNCION  changeImage()*/
function rotateImages(elementId, imageArray, interval) {
    let currentIndex = 0;
    const imgElement = document.getElementById(elementId);
    function changeImage() {
        imgElement.src = imageArray[currentIndex];
        currentIndex = (currentIndex + 1) % imageArray.length;
    }
  
    setInterval(changeImage, interval);
  }
/*carga lista de imagenes y funciones*/
document.addEventListener('DOMContentLoaded', () => {
    const images1 = [
        'assets/img/portadas/juegos/master-ball-2.png',
        'assets/img/portadas/juegos/master-ball-1.png',
    ];
  
    const images2 = [
        'assets/img/portadas/juegos/dodge-the-creeps-2.png',
        'assets/img/portadas/juegos/dodge-the-creeps-1.png',
    ];
  
    rotateImages('dynamicImage1', images1, 5000); // Cambia de imagen cada 5 segundos
    rotateImages('dynamicImage2', images2, 5000); // Cambia de imagen cada 5 segundos
    // Añade más llamadas a rotateImages() para otras imágenes
  });