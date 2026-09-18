document.addEventListener('DOMContentLoaded', () => {

  const heroBtn = document.querySelector('.hero-text .btn-primary');
  const ctaSection = document.querySelector('.cta-card');

  heroBtn.addEventListener('click', (event) => {
    event.preventDefault();
    ctaSection.scrollIntoView({ behavior: 'smooth' });
  });


  const tryFreeBtn = document.querySelector('.btn-secondary');

  tryFreeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    alert('მადლობა დაინტერესებისთვის! უფასო ვერსიის გააქტიურება მალე გახდება შესაძლებელი.');
  });

});
