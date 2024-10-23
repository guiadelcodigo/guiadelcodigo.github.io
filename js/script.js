function mostrarOcultarMenu() {
  const menu = document.getElementById('menu-usuario');
  // Toggle entre 'flex' y 'none' para mostrar u ocultar
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
const botonMenu = document.getElementById('btn-menu-usuario');
botonMenu.addEventListener('click', mostrarOcultarMenu);
botonMenu.addEventListener('click', () => {
  botonMenu.classList.toggle('menu-usuario-activado');
});
/*oculta todos los hijos del <main> y muestra solo un hijo por su id*/
function mostrarElemento(idSeleccionado) {
  // Selecciona el <main> y todos sus hijos
  var main = document.getElementById('main');
  var hijos = main.children;

  // Recorre todos los hijos de <main>
  for (var i = 0; i < hijos.length; i++) {
      // Oculta todos los elementos excepto el que tiene el ID seleccionado
      if (hijos[i].id !== idSeleccionado) {
          hijos[i].classList.add('oculto'); // Añade la clase 'oculto' para ocultar
      } else {
          hijos[i].classList.remove('oculto'); // Quita la clase 'oculto' para mostrar
      }
  }
}
/*Muestra label con mensaje para confirmar texto copiado*/
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
