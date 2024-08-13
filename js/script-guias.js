/*copia codigo de un <code> y remplaza ejemplos de etiqueta(&lt;, &gt;) por < > */
function copyCode() {
    // Selecciona el contenido de la etiqueta <code>
    const codeElement = document.querySelector('code');
    const codeText = codeElement.textContent;

    // Reemplaza las entidades HTML con sus correspondientes caracteres
    const decodedText = codeText
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');

    // Crea un elemento de texto temporal para copiar el contenido
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = decodedText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    // Muestra el mensaje de notificación
    const notification = document.getElementById('copy-notification');
    notification.style.display = 'block';

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}