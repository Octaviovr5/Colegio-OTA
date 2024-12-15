// Función para alternar el menú (mostrar u ocultar)
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');
  
  // Alternamos la clase 'open' para mostrar/ocultar el menú
  sidebar.classList.toggle('open');
  
  // Alternamos el margen del contenido para desplazarlo
  content.classList.toggle('open');
}


// Seleccionamos todas las imágenes con la clase 'clickable-image'
const images = document.querySelectorAll('.clickable-image');

// Creamos un contenedor de imagen grande
const enlargedImg = document.createElement('img');
document.body.appendChild(enlargedImg);

// Añadimos clases para ocultar la imagen inicialmente
enlargedImg.classList.add('img-enlarged', 'hidden');

// Escuchamos el clic sobre las imágenes
images.forEach(image => {
  image.addEventListener('click', () => {
    // Cambiamos la imagen grande a la imagen seleccionada
    enlargedImg.src = image.src.replace('thumb', 'large'); // Si tienes versiones más grandes de las imágenes
    enlargedImg.classList.remove('hidden'); // Mostramos la imagen grande

    // Al hacer clic en la imagen agrandada, la ocultamos de nuevo
    enlargedImg.addEventListener('click', () => {
      enlargedImg.classList.add('hidden');
    });
  });
});

