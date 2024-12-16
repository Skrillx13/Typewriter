anchors.options = {
  icon: '#'
};
anchors.add();

document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('.anchorjs-link');

  anchorLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});