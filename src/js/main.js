// Script para manejar la transición entre secciones
document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.getElementById('intro-section');
  const mainContent = document.getElementById('main-content');
  
  // Función para cambiar de la intro al contenido principal
  function showMainContent() {
    // Añadir clase para animar la salida de la intro
    introSection.classList.add('fade-out');
    
    // Después de la animación, ocultar intro y mostrar contenido principal
    setTimeout(() => {
      introSection.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.classList.add('fade-in');
    }, 1000); // Tiempo de la animación de salida
  }
  
  // Botón específico dentro de la intro (si existe)
  const introButton = document.querySelector('.intro-action__button');
  if (introButton) {
    introButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar que el clic se propague al intro-section
      showMainContent();
    });
  }
});