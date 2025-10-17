document.addEventListener("DOMContentLoaded", function() {
  // Add click event listeners to all elements with the toggle-abstract class
  document.querySelectorAll('.toggle-abstract').forEach(function(el) {
    el.addEventListener('click', function() {
      // Get the target ID from the data-target attribute
      var targetId = el.getAttribute('data-target');
      // Toggle the display property of the target element
      var targetElement = document.getElementById(targetId);
      if (targetElement.style.display === 'none' || targetElement.style.display === '') {
        targetElement.style.display = 'block';
      } else {
        targetElement.style.display = 'none';
      }
    });
  });
});
