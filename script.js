// DOM READY
document.addEventListener('DOMContentLoaded', function() {
  
  // BOTONES TABS
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  // CONTENIDOS TABS
  const tabContents = document.querySelectorAll('.tab-content');

  // EVENTOS CLICK
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      // TARGET TAB
      const targetSection = button.getAttribute('data-section');
      
      // LIMPIA BOTONES
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // ACTIVA CLICK
      button.classList.add('active');

      // MUESTRA TAB
      tabContents.forEach(content => {
        if (content.id === targetSection) {
          content.classList.add('active');   // VISIBLE
        } else {
          content.classList.remove('active'); // OCULTO
        }
      });
    });
  });
});
