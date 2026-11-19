// gabrielbeitum.ai — menu, animações de entrada e a sequência de cards.
(function () {
  var cabeca = document.querySelector('.cabeca');
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var aberto = menu.classList.toggle('aberto');
      burger.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      burger.setAttribute('aria-label', aberto ? 'Fechar o menu' : 'Abrir o menu');
    });
  }
  if (cabeca) {
    var marca = function () { cabeca.classList.toggle('rolou', window.scrollY > 8); };
    marca();
    window.addEventListener('scroll', marca, { passive: true });
  }

  // Entrada dos blocos quando aparecem na tela
  var alvos = document.querySelectorAll('.reveal, .fluxo, .celular, .relat');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (itens) {
      itens.forEach(function (it) {
        if (it.isIntersecting) { it.target.classList.add('visto'); obs.unobserve(it.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    alvos.forEach(function (el) { obs.observe(el); });
  } else {
    alvos.forEach(function (el) { el.classList.add('visto'); });
  }

  // Caminho das etapas (Como funciona): a linha se preenche conforme a rolagem
  var lista = document.querySelector('.zig-lista');
  var semMovimento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (lista && !semMovimento) {
    var fio = lista.querySelector('.zig-trilho i');
    var marcas = lista.querySelectorAll('.zig-marca');
    lista.classList.add('anim');
    var pedido = false;
    var anda = function () {
      pedido = false;
      var r = lista.getBoundingClientRect();
      var alvo = window.innerHeight * 0.62;
      var p = Math.max(0, Math.min(1, (alvo - r.top) / r.height));
      if (fio) fio.style.transform = 'scaleY(' + p.toFixed(4) + ')';
      marcas.forEach(function (m) {
        var mr = m.getBoundingClientRect();
        m.classList.toggle('ativo', mr.top + mr.height / 2 <= alvo + 2);
      });
    };
    var agenda = function () { if (!pedido) { pedido = true; window.requestAnimationFrame(anda); } };
    window.addEventListener('scroll', agenda, { passive: true });
    window.addEventListener('resize', agenda);
    anda();
  }

  // Sequência de cards (Como funciona)
  var trilho = document.querySelector('.stories');
  if (trilho) {
    var cards = trilho.querySelectorAll('.story');
    var pontos = document.querySelectorAll('.pontos i');
    var setas = document.querySelectorAll('.seta-ctrl');
    var atual = function () {
      var melhor = 0, dist = Infinity, base = trilho.getBoundingClientRect().left;
      cards.forEach(function (c, i) {
        var d = Math.abs(c.getBoundingClientRect().left - base - parseFloat(getComputedStyle(trilho).paddingLeft));
        if (d < dist) { dist = d; melhor = i; }
      });
      if (trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4) melhor = Math.max(melhor, cards.length - 1);
      return melhor;
    };
    var pinta = function () {
      var i = atual();
      pontos.forEach(function (p, k) { p.classList.toggle('ativo', k === i); });
      setas.forEach(function (s) {
        var dir = Number(s.getAttribute('data-dir'));
        s.disabled = dir < 0 ? trilho.scrollLeft < 4 : trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
      });
    };
    var passo = function (dir) {
      var largura = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(trilho).columnGap || 0);
      trilho.scrollBy({ left: dir * largura, behavior: 'smooth' });
    };
    setas.forEach(function (s) { s.addEventListener('click', function () { passo(Number(s.getAttribute('data-dir'))); }); });
    trilho.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); passo(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); passo(-1); }
    });
    trilho.addEventListener('scroll', function () { window.requestAnimationFrame(pinta); }, { passive: true });
    window.addEventListener('resize', pinta);
    pinta();
  }
})();
