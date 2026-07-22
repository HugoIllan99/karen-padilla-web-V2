const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.07 + 's';
    observer.observe(el);
  });

  // Acordeón de especialidades (equipo.html)
  document.querySelectorAll('.acc-item.open .acc-body').forEach(body => {
    body.style.maxHeight = body.scrollHeight + 'px';
  });

  document.querySelectorAll('.acc-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.closest('.acc-item');
      const body = item.querySelector('.acc-body');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.acc-item.open').forEach(openItem => {
        if(openItem !== item){
          openItem.classList.remove('open');
          openItem.querySelector('.acc-body').style.maxHeight = null;
        }
      });

      if(isOpen){
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
