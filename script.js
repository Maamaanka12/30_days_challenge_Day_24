// Beder Printing Center - minimal JS (no scroll animations)
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  document.querySelectorAll('.current-year').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Product filter (products.html only)
  var btns = document.querySelectorAll('.filter-btn');
  if (btns.length) {
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        var f = b.getAttribute('data-f');
        document.querySelectorAll('.products-grid .showcase-card').forEach(function (card) {
          card.style.display = (f === 'all' || card.getAttribute('data-cat') === f) ? '' : 'none';
        });
      });
    });
  }
})();
