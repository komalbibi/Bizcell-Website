const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showNextTestimonial() {
  testimonials[index].classList.remove("active");
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add("active");
}

setInterval(showNextTestimonial, 4000); // change every 4 seconds


//hamburger
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('toggle');
    navMenu.classList.toggle('active');
  });
