// Obtén referencias a los elementos HTML
const toggleButton = document.getElementById('toggleButton');
const item1 = document.getElementById('item1');

// Variable para rastrear el estado actual
var itemsVisible = true;

// Función para alternar la visibilidad de los elementos
function toggleItems() {
    if (itemsVisible) {
        item1.style.display = 'none';
    } else {
        item1.style.display = 'block'; // Puedes usar 'inline-block' o 'flex', según sea necesario
    }
    itemsVisible = !itemsVisible; // Invertir el estado
}

// Agregar un evento de clic al botón para activar la función de alternar
toggleButton.addEventListener('click', toggleItems);