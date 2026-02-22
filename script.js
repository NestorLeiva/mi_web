/* ========================================
   EVENTOS DE TABS - LÓGICA COMPLETA
   ======================================== */
document.addEventListener('DOMContentLoaded', function() {
  
  /* 1. Captura botones Y contenidos */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  /* 2. Para CADA botón, agrega click listener */
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      /* 3. Identifica qué tab quiere (data-section) */
      const targetSection = button.getAttribute('data-section');
      
      /* 4. QUITA active de TODOS los botones */
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      /* 5. PONE active SOLO en el clickeado */
      button.classList.add('active');
      
      /* 6. MUESTRA SOLO el contenido correcto */
      tabContents.forEach(content => {
        if (content.id === targetSection) {
          content.classList.add('active');  // display: block
        } else {
          content.classList.remove('active'); // display: none
        }
      });
    });
  });
});
