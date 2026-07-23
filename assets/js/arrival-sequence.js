export class ArrivalSequence{
constructor(scene){
 this.scene=scene;
}
play(){
 if(!this.scene) return;
 this.scene.animate(
 [
  {opacity:0,transform:'translateY(40px) scale(.98)'},
  {opacity:1,transform:'translateY(0) scale(1)'}
 ],
 {duration:1200,easing:'cubic-bezier(.22,.61,.36,1)',fill:'both'}
 );
}
}
