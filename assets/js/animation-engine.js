export class AnimationEngine{
update(scene){
 scene.animate(
  [{opacity:.4,transform:'translateY(24px)'},{opacity:1,transform:'translateY(0)'}],
  {duration:700,easing:'ease-out',fill:'both'}
 );
}
}