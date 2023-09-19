___________________
**position:**
static:
relative:
absolute:
fixed:
sticky:
______________


color azul verde #1F8E95

@keyframes repetirAnimacionPulso {
    0% {
        transform:rotateY(360deg) scale(1); /* Escala normal al inicio */
    }
    50% {
        transform:rotateY(360deg) scale(1.2); /* Escala aumentada a la mitad de la animación */
    }
    100% {
        transform:rotateY(360deg) scale(1); /* Volver a la escala normal al final */
    }
}
@keyframes repetirAnimacionGiro{
    0%{
        transform: rotatey(0deg);
    }
    50%{
        transform: rotatey(180deg);
    }
    100%{
        transform: rotatey(360deg);
    }

    /*ejemplo de transicion de animacion y llamar a una animacion*/
    transition: transform .5s ease-in;
    animation: repetirAnimacionPulso 2s infinite;



    /*sombra para iconos de redes*/
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);



 Móvil (Portrait):
Ancho típico: 320px a 480px
Ejemplos populares: iPhone SE (320x568), iPhone 6/7/8 (375x667)

Móvil (Landscape):
Ancho típico: 480px a 768px
Ejemplos populares: iPhone X (812x375) en modo horizontal

Tablet (Portrait):
Ancho típico: 768px a 1024px
Ejemplos populares: iPad Mini (768x1024), iPad (768x1024)

Tablet (Landscape):
Ancho típico: 1024px a 1280px
Ejemplos populares: iPad Pro (1024x1366) en modo horizontal

Escritorio (Laptop):
Ancho típico: 1280px a 1440px
Ejemplos populares: Pantallas de laptops comunes

Escritorio (Monitor Grande):
Ancho típico: 1440px a 1920px o más
Ejemplos populares: Monitores de escritorio más grandes