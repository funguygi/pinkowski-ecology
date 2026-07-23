const header=document.querySelector('.site-header');
let last=0;
addEventListener('scroll',()=>{
 const y=scrollY;
 header?.classList.toggle('is-scrolled',y>20);
 header?.classList.toggle('is-hidden',y>last&&y>160);
 last=y;
},{passive:true});

document.querySelector('.brand')?.addEventListener('click',e=>{
 e.preventDefault();
 scrollTo({top:0,behavior:'smooth'});
});
