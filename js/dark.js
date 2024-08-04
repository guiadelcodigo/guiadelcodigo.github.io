const temaAlmacenado = localStorage.getItem('tema');/*Obtenemos el tema del localstorage */
        const temaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';/* obtenemos el teme de preferencia del sistema*/
        const temaSeleccionado = temaAlmacenado ?? temaSistema;
        document.documentElement.setAttribute('data-tema', temaSeleccionado);

document.addEventListener('DOMContentLoaded', ()=>{/*para activar tema oscuro*/
    const switchTema = document.querySelector('.header__tema-check');
    const root = document.documentElement;
    if(root.getAttribute('data-tema') === 'dark'){
        switchTema.checked = true;
    }
    switchTema.addEventListener('click',slideTema);
    function slideTema(){
        console.log("clic")
        const setTema = switchTema.checked ? 'dark' : 'light';
        root.setAttribute('data-tema', setTema );
        localStorage.setItem('tema', setTema)/*Almacenamos el tema en localstorage*/
    }

});
