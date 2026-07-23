export class SceneManager{
constructor(scenes){this.scenes=scenes;this.active=null;}
activate(index){
 if(index===this.active||index<0||index>=this.scenes.length)return;
 this.scenes.forEach((s,i)=>s.toggleAttribute('data-active',i===index));
 this.active=index;
 document.dispatchEvent(new CustomEvent('scenechange',{detail:{index,scene:this.scenes[index]}}));
}
}