// Add click event listener to the button
document.querySelector('.link-button').addEventListener('click', function() {
  window.location.href = 'pages/generator/generator.html'; 
});

// Handle footer visibility on scroll
window.addEventListener('scroll', function() {
  const footer = document.querySelector('footer');
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;
  const headerHeight = header.offsetHeight;

  // When scroll position is greater than header height
  if (scrollPosition > headerHeight) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.display = 'none'; // Hide the footer
  } else {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.display = 'block'; // Show the footer
  }
});


// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Get the toggle button and navigation menu elements
  const navMenu = document.getElementById('nav-menu');
  const toggleButton = document.getElementById('toggle-nav');
  
  // Add event listener to the toggle button
  toggleButton.addEventListener('click', function() {
    // Toggle the 'nav-active' class on the navigation menu
    navMenu.classList.toggle('nav-active');
  });
});

