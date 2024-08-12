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

function mostrarGuias(event, categoria) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();
  // Ocultar todas las secciones de guías
  var secciones = document.querySelectorAll('.size-section');
  secciones.forEach(function(section) {
    section.classList.add('oculto');
  });
  // Mostrar la sección de la categoría seleccionada
  document.getElementById('guias-' + categoria).classList.remove('oculto');
}

function abrirGuia(event, guias) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();
  // Ocultar todas las secciones de guías
  var secciones = document.querySelectorAll('.size-section');
  secciones.forEach(function(section) {
    section.classList.add('oculto');
  });
  // Mostrar la sección de la categoría seleccionada
  document.getElementById('guias-' + guias).classList.remove('oculto');
}

function abrirCategorias(event, categorias) {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();
  // Ocultar todas las secciones de guías
  var secciones = document.querySelectorAll('.size-section');
  secciones.forEach(function(section) {
    section.classList.add('oculto');
  });
  // Mostrar la sección de la categoría seleccionada
  document.getElementById(categorias).classList.remove('oculto');
}





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

document.getElementById('copyEmail').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se abra el cliente de correo
  
    const emailText = this.textContent;
    navigator.clipboard.writeText(emailText).then(function() {
      const message = document.getElementById('copyMessage');
      message.classList.add('show');
      setTimeout(function() {
        message.classList.remove('show');
      }, 2000); // El mensaje desaparece después de 2 segundos
    }, function(err) {
      console.error('No se pudo copiar el texto: ', err);
    });
  });