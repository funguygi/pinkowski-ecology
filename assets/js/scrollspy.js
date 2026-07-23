const links=[...document.querySelectorAll('.site-nav a[href^="#"]')];
const map=new Map(links.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting){
   links.forEach(l=>l.classList.remove('active'));
   map.get(e.target.id)?.classList.add('active');
  }
 });
},{threshold:.45});
document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));
