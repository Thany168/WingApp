document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');
  toggleBtn.addEventListener('click', () => {


    if (sidebar.classList.contains('collapsed')) {
      sidebar.classList.remove('collapsed');
      sidebar.classList.add('expanded');
    } else {
      sidebar.classList.remove('expanded');
      sidebar.classList.add('collapsed');
    }
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.add('collapsed'); // Default to collapsed
      sidebar.classList.remove('expanded'); // Ensure expanded is removed
    } else {
      sidebar.classList.remove('collapsed'); // Default to expanded on large screens
      sidebar.classList.add('expanded');
    }
  };
  handleResize();
  window.addEventListener('resize', handleResize);
});


// Slide ads
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let index = 0;

  function autoSlide() {
    index = (index + 1) % totalSlides; 
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  setInterval(autoSlide, 3000);
});
