const hiddenElements = document.querySelectorAll('.hidden-element');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

hiddenElements.forEach(element => {
    observer.observe(element);
});


let menuLinks = document.querySelectorAll('.menu-link');


menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      
      // Отримуємо ID секції, до якої потрібно скролити
      let targetId = this.getAttribute('href');
      let targetSection = document.getElementById(targetId.slice(1));
      
      if (targetId[0] == "#"){
        e.preventDefault(); // Запобігаємо стандартній поведінці посилання
        // console.log(targetId)
        targetSection.scrollIntoView({
          behavior: 'smooth', // Плавний скрол
          block: 'start'
        });
      }
   
      // Скролимо до відповідної секції
    });
  });