// mobile-app-highlight.js
document.addEventListener('DOMContentLoaded', function() {
  // Get the mobile app card element
  const mobileAppCard = document.querySelector('.mobile-app-card');
  
  if (!mobileAppCard) return;
  
  // Function to add extra highlighting when the card is in viewport
  const addExtraGlowEffect = () => {
    const rect = mobileAppCard.getBoundingClientRect();
    const isVisible = (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    
    if (isVisible) {
      mobileAppCard.classList.add('extra-glow');
    } else {
      mobileAppCard.classList.remove('extra-glow');
    }
  };
  
  // Initial check
  addExtraGlowEffect();
  
  // Add event listener for scroll
  window.addEventListener('scroll', addExtraGlowEffect);
});