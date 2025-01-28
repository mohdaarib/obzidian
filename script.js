document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
  
    // Trigger shine effect on hover
    ctaButton.addEventListener('mouseenter', () => {
      ctaButton.classList.add('hovered');
    });
  
    ctaButton.addEventListener('mouseleave', () => {
      ctaButton.classList.remove('hovered');
    });
  
    // Automatically trigger shine every 4 seconds
    setInterval(() => {
      ctaButton.classList.add('active-shine');
      setTimeout(() => {
        ctaButton.classList.remove('active-shine');
      }, 400); // Remove the class after 400ms (duration of the shine effect)
    }, 4000); // Repeat every 4 seconds
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const ctaButtonSpt = document.querySelector('.cta-button_spt');
  
    // Trigger shine effect on hover
    ctaButtonSpt.addEventListener('mouseenter', () => {
      ctaButtonSpt.classList.add('hovered');
    });
  
    ctaButtonSpt.addEventListener('mouseleave', () => {
      ctaButtonSpt.classList.remove('hovered');
    });
  
    // Automatically trigger shine every 4 seconds
    setInterval(() => {
      ctaButtonSpt.classList.add('active-shine');
      setTimeout(() => {
        ctaButtonSpt.classList.remove('active-shine');
      }, 400); // Remove the class after 400ms (duration of the shine effect)
    }, 4000); // Repeat every 4 seconds
});
