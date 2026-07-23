export class HyphaEngine{
constructor(root=document.documentElement){this.root=root;}
update(progress){
 this.root.style.setProperty('--hypha-opacity',(progress*0.9).toFixed(2));
 this.root.style.setProperty('--hypha-scale',(0.95+progress*0.08).toFixed(3));
}
}
