document.querySelectorAll('.gallery figure').forEach((f,i)=>{
 f.tabIndex=0;
 f.setAttribute('role','img');
 f.setAttribute('aria-label',`Field photograph ${i+1}`);
});