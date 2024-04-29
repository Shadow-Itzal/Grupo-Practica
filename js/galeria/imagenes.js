let closeButton;
function agrandar(img) {
    // Aplica estilos para agrandar la imagen
    img.classList.add('agrandar');
    
    // Crea un botón de cierre para volver a la vista previa
    closeButton = document.createElement('button');
    closeButton.innerText = 'Cerrar';
    closeButton.classList.add('close-button');
    closeButton.onclick = function() {
        event.stopPropagation();
        img.classList.remove('agrandar');
        closeButton.remove(this); 
        
        console.log(closeButton);
    };
    
    // Agrega el botón de cierre en card
    img.appendChild(closeButton);
}
