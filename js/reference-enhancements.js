(function(){
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Typewriter role rotation in the hero badge.
  var role = document.getElementById('typewriterRole');
  if(role && !reduce){
    var words = ['DATA ANALYST','BUSINESS INTELLIGENCE SPECIALIST','DATA STORYTELLER'];
    var wi = 0, ci = 0, deleting = false;
    function tick(){
      var word = words[wi];
      role.textContent = deleting ? word.slice(0, Math.max(0,ci--)) : word.slice(0, Math.min(word.length,ci++));
      var done = !deleting && ci > word.length;
      var empty = deleting && ci < 0;
      if(done){ deleting=true; return setTimeout(tick, 1300); }
      if(empty){ deleting=false; wi=(wi+1)%words.length; ci=0; return setTimeout(tick, 300); }
      setTimeout(tick, deleting ? 38 : 68);
    }
    tick();
  }

  // Hover-to-preview HTML5 videos with accessible controls fallback.
  document.querySelectorAll('.project-video-wrapper video').forEach(function(video){
    video.muted = true; video.loop = true; video.playsInline = true;
    var box = video.closest('.project-video-wrapper');
    if(box){
      box.addEventListener('mouseenter', function(){ video.play().catch(function(){}); });
      box.addEventListener('mouseleave', function(){ video.pause(); });
      box.addEventListener('touchstart', function(){ if(video.paused) video.play().catch(function(){}); }, {passive:true});
    }
  });

  // Certificates open in an in-page lightbox, never a new tab.
  var modal = document.getElementById('certificateLightbox');
  var modalImage = modal && modal.querySelector('.certificate-lightbox__image');
  var modalTitle = modal && modal.querySelector('.certificate-lightbox__title');
  function closeModal(){ if(modal){ modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); } }
  document.querySelectorAll('.cert-card').forEach(function(card){
    var image = card.querySelector('.cert-card__image');
    if(!image || !modal) return;
    card.setAttribute('tabindex','0'); card.setAttribute('role','button');
    function open(){ modalImage.src=image.src; modalImage.alt=image.alt; modalTitle.textContent=(card.querySelector('h5')||{}).textContent||'Certificate'; modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); }
    card.addEventListener('click',open); card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });
  if(modal){
    modal.querySelectorAll('[data-lightbox-close]').forEach(function(el){el.addEventListener('click',closeModal);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});
  }

  // Subtle IntersectionObserver reveal with staggered delays.
  if('IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){ entries.forEach(function(entry){ if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, {threshold:.12, rootMargin:'0px 0px -30px'});
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(function(el,i){ el.style.setProperty('--reveal-delay', Math.min(i%6,5)*55+'ms'); observer.observe(el); });
  }
})();
