(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn);else fn();}
  ready(function(){
    var cursor=document.querySelector('.custom-cursor');
    if(cursor&&window.matchMedia('(pointer:fine)').matches){
      document.addEventListener('pointermove',function(e){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';},{passive:true});
      document.querySelectorAll('a,button,.featured-case,.workflow-step,.project-card,.skill-pill').forEach(function(el){el.addEventListener('mouseenter',function(){cursor.classList.add('is-hover')});el.addEventListener('mouseleave',function(){cursor.classList.remove('is-hover')})});
    }
    var canvas=document.getElementById('dataNetwork'),ctx=canvas&&canvas.getContext('2d');
    if(canvas&&ctx){
      var nodes=[];
      function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);nodes=[];for(var i=0;i<Math.min(48,Math.max(24,innerWidth/28));i++)nodes.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.7+1});}
      function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);nodes.forEach(function(n){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>innerWidth)n.vx*=-1;if(n.y<0||n.y>innerHeight)n.vy*=-1});for(var i=0;i<nodes.length;i++){var a=nodes[i];ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,Math.PI*2);ctx.fillStyle='rgba(53,231,243,.72)';ctx.fill();for(var j=i+1;j<nodes.length;j++){var b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<150){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle='rgba(53,231,243,'+(0.13*(1-d/150))+')';ctx.lineWidth=.7;ctx.stroke()}}}if(!reduce)requestAnimationFrame(draw)}
      addEventListener('resize',resize);resize();draw();
    }
    if(window.gsap&&!reduce){
      if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
      gsap.from('.hero__title .line span',{yPercent:110,opacity:0,duration:1.05,stagger:.12,ease:'power4.out',delay:.25});
      gsap.from('.hero__badge,.hero__text,.hero__actions',{y:24,opacity:0,duration:.8,stagger:.1,ease:'power3.out',delay:.55});
      if(window.ScrollTrigger){
        gsap.utils.toArray('.featured-case').forEach(function(card,i){gsap.from(card,{y:70,opacity:0,rotateX:4,duration:.9,delay:i*.08,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 82%',once:true}})});
        gsap.from('.pipeline-line path',{scrollTrigger:{trigger:'.pipeline-line',start:'top 80%'},strokeDashoffset:100,duration:1.8,ease:'power2.out'});
        gsap.to('.footer__statement',{scale:1.04,scrollTrigger:{trigger:'.footer__statement',start:'top bottom',end:'bottom top',scrub:1}});
      }
    }
    if(window.Lenis&&!reduce){var lenis=new Lenis({duration:1.05,smoothWheel:true,syncTouch:false});function raf(t){lenis.raf(t);requestAnimationFrame(raf)}requestAnimationFrame(raf);if(window.ScrollTrigger)lenis.on('scroll',ScrollTrigger.update)}
    if(window.VanillaTilt&&!reduce)VanillaTilt.init(document.querySelectorAll('[data-tilt],.skill-pill'),{max:7,speed:650,glare:true,'max-glare':.18,scale:1.015});
    document.querySelectorAll('.hero__actions .btn--solid').forEach(function(btn){btn.addEventListener('pointermove',function(e){var r=btn.getBoundingClientRect();btn.style.transform='translate('+(e.clientX-r.left-r.width/2)*.12+'px,'+(e.clientY-r.top-r.height/2)*.12+'px)'});btn.addEventListener('pointerleave',function(){btn.style.transform=''})});
  });
})();
