export class ScrollEngine{
constructor(sceneManager,animationEngine){
 this.sceneManager=sceneManager;
 this.animationEngine=animationEngine;
 this.sections=[...document.querySelectorAll('[data-scene]')];
}
start(){
 const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
   if(e.isIntersecting){
    this.sceneManager.activate(this.sections.indexOf(e.target));
    this.animationEngine.update(e.target);
   }
  });
 },{threshold:0.55});
 this.sections.forEach(s=>io.observe(s));
}
}