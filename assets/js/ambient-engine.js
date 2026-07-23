export class AmbientEngine{
constructor(root=document.documentElement){
 this.root=root;
}
setIntensity(value){
 this.root.style.setProperty('--ambient',value.toFixed(3));
}
update(progress){
 const intensity=0.2+progress*0.8;
 this.setIntensity(intensity);
}
}
