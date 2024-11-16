document.addEventListener("DOMContentLoaded", () => {
    console.log("Love Garden Sounds");
});

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for reaching out! We will get back to you shortly.');
    this.reset(); // Reset form fields
});