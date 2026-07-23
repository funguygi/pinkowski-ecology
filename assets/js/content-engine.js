export class ContentEngine{
async load(url){
 const r=await fetch(url);
 if(!r.ok) throw new Error('Content load failed');
 return r.json();
}
}
