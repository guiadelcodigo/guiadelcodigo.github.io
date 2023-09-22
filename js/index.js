import './firebaseConfig.js'
//______________________________________________________________________________________________
//---------------------CODIGO DE MENU DESPEGABLE--------------------------------------------------------
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

//______________________________________________________________________________________________
//---------------------CODIGO DE FORMULARIO LOGIN DESPEGABLE-------------------------------------
const emailLogin  = document.getElementById('emailLogin') 
const passwordLogin  = document.getElementById('passwordLogin')
const btnLogin = document.getElementById('btn-login')
const btnOpenLogin = document.getElementById('btn-open-login');


var loginVisible = false;

function abrirFormLogin() {
    if (loginVisible) {
        emailLogin.style.display = 'none';
        passwordLogin.style.display = 'none';
        btnLogin.style.display = 'none';
        txtLogin.style.display = 'none';
    } else {
        emailRegister.style.display = 'none';
        passwordRegister.style.display = 'none';
        btnRegister.style.display = 'none';
        txtRegister.style.display = 'none';
        emailLogin.style.cssText = 'display:block; grid-area:sp2';
        passwordLogin.style.cssText = 'display:block; grid-area:sp3';
        btnLogin.style.cssText = 'display:block; grid-area:sp4';
        btnOpenRegister.style.cssText = 'display: block;height:80%;grid-area:sp5';
        txtLogin.style.cssText = 'display: block;grid-area:sp1';
        btnOpenLogin.style.display ='none';
        console.log('boton login desaparece');
        loginVisible=true;
    }
    loginVisible = !loginVisible; // Invertir el estado
}

btnOpenLogin.addEventListener('click', abrirFormLogin);

//______________________________________________________________________________________________
//---------------------CODIGO DE FORMULARIO REGISTER DESPEGABLE----------------------------------
const btnOpenRegister = document.getElementById('btn-open-register');
const emailRegister = document.getElementById('emailRegister')
const passwordRegister = document.getElementById('passwordRegister')
const btnRegister = document.getElementById('btn-register')
const txtRegister = document.getElementById('txtRegister')
const txtLogin = document.getElementById('txtLogin')

var registerVisible = false;
function abrirFormRegister() {
    if (registerVisible) {
        emailRegister.style.display = 'none';
        passwordRegister.style.display = 'none';
        btnRegister.style.display = 'none';
        txtRegister.style.display = 'none';
    } else {
        emailLogin.style.display = 'none';
        passwordLogin.style.display = 'none';
        btnLogin.style.display = 'none';
        txtLogin.style.display = 'none';
        emailRegister.style.cssText = 'display:block; grid-area:sp3';
        passwordRegister.style.cssText = 'display:block; grid-area:sp4';
        btnRegister.style.cssText = 'display:block; grid-area:sp2';
        btnOpenLogin.style.cssText = 'display: block;height:80%;grid-area:sp1';
        txtRegister.style.cssText = 'display: block; grid-area:sp5';
        btnOpenRegister.style.display ='none';//desaparece boton de registro
        console.log('boton Register desaparece');
        registerVisible=true;
    }
    registerVisible = !registerVisible; // Invertir el estado
}
btnOpenRegister.addEventListener('click', abrirFormRegister);

