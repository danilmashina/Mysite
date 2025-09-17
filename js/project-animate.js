// project-animate.js
// Плавное появление project-card при прокрутке

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');
  const mobileAppCard = document.querySelector('.mobile-app-card');
  
  // Специальный эффект для карточки мобильного приложения
  let firstReveal = true;
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.95;
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add('visible');
        
        // Специальный эффект для карточки мобильного приложения при первом появлении
        if (card.classList.contains('mobile-app-card') && firstReveal) {
          setTimeout(() => {
            card.classList.add('extra-glow');
            setTimeout(() => {
              firstReveal = false;
            }, 3000); // Длительность сильного эффекта при первом появлении
          }, 500);
        }
      }
    });
  };
  
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
