document.addEventListener("DOMContentLoaded", () => {
    console.log("Love Garden Sounds");
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! We will get back to you shortly.');
    this.reset(); // Reset form fields
});

// Get all parallax layers
const layers = document.querySelectorAll('.layer');

// Add mousemove listener for parallax effect
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5; // Normalize X
  const y = (e.clientY / window.innerHeight) - 0.5; // Normalize Y

  // Apply parallax effect to each layer
  layers.forEach((layer, index) => {
    const depth = (index + 1) * 10; // Adjust depth per layer
    const translateX = x * depth;
    const translateY = y * depth;
    layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
