document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');
  const toggleButton = document.getElementById('toggle-button');
  const navbar = document.querySelector('.navbar');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Close the navbar when a link is clicked
      navbar.classList.remove('show');
    });
  });

  // Toggle navbar on mobile
  toggleButton.addEventListener('click', function () {
    navbar.classList.toggle('show');
  });
});
