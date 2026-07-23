export class ParallaxEngine{
constructor(){
 this.layers=[...document.querySelectorAll('[data-depth]')];
 this.ticking=false;
}
start(){
 addEventListener('scroll',()=>this.request(),{passive:true});
 this.request();
}
request(){
 if(this.ticking) return;
 this.ticking=true;
 requestAnimationFrame(()=>{
   const y=scrollY;
   for(const layer of this.layers){
     const d=Number(layer.dataset.depth)||0;
     layer.style.transform=`translate3d(0,${(-y*d).toFixed(2)}px,0)`;
   }
   this.ticking=false;
 });
}
}
