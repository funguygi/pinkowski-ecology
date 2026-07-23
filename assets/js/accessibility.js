addEventListener('keydown',e=>{
 if(e.key==='/'&&document.activeElement===document.body){
  e.preventDefault();
  document.querySelector('main')?.focus?.();
 }
});