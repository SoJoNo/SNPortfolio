// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.portfolio-filter button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

// Role cycling animation
const roles = [
  "an artist.",
  "a web developer.",
  "a software developer.",
  "a UI/UX designer.",
  "a database manager."
];

const roleElement = document.getElementById("role-text");
let currentRoleIndex = 0;
const transitionDuration = 500;

function cycleRoles() {
  // Fade out
  roleElement.classList.add("fade-out");
  roleElement.classList.remove("fade-in");
  roleElement.style.opacity = 0;

  setTimeout(() => {
    // Update text
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    roleElement.textContent = roles[currentRoleIndex];

    // Start fade in
    roleElement.classList.remove("fade-out");
    roleElement.classList.add("fade-in");
  }, transitionDuration); // Half of the transition time
}

// Start cycling (every 2 seconds - 1s visible + 1s transition)
setInterval(cycleRoles, 2000);

// Initialize first role
roleElement.textContent = roles[currentRoleIndex];
roleElement.classList.add("fade-in");

// Image lightbox functionality (optional)
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        // Create lightbox modal
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${image.src}" alt="${image.alt}">
                <p>${image.nextElementSibling.textContent}</p>
                <button class="close-lightbox">&times;</button>
            </div>
        `;

        document.body.appendChild(lightbox);

        // Close lightbox
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            lightbox.remove();
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});