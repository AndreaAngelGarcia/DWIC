import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    once: true
  });


// Initialize AOS
/*
AOS.init({
    once: true
  });
  

// Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'aos-animate' class to the element
        entry.target.classList.add('aos-animate');
      }
    });
  });
  
  // Observe all elements with the 'data-aos' attribute
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(element => {
    observer.observe(element);
  });
  */