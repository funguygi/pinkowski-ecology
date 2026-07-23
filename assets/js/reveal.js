const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce){
 const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}
 }),{threshold:.15});
 document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}else{
 document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}
