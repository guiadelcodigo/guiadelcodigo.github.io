//______________________________________________________________________________________________
//---------------------OBTENER VALORES DEL BOTON REGISTER--------------------------------------
function registrar() {
    var emailRegister = document.getElementById('emailRegister').value;
    var passwordRegister = document.getElementById('passwordRegister').value;
    console.log(emailRegister, passwordRegister + " click ok en register");
}
//______________________________________________________________________________________________
//---------------------OBTENER VALORES DEL BOTON LOGIN--------------------------------------
function iniciarSesion(){
    var emailLogin = document.getElementById('emailLogin').value;
    var passwordLogin = document.getElementById('passwordLogin').value;
    console.log(emailLogin, passwordLogin + " click ok en login");
}


