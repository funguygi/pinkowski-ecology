export class RootNetwork{
constructor(host=document.getElementById('svg-root')){this.host=host;}
render(progress=0){
 if(!this.host) return;
 const p=Math.max(0,Math.min(1,progress));
 this.host.innerHTML=`<svg viewBox="0 0 1000 1000" aria-hidden="true">
 <path d="M500 0 C500 150 480 260 470 380 S420 720 ${420-120*p} 1000"
 stroke="currentColor" stroke-width="4" fill="none"
 pathLength="1"
 style="stroke-dasharray:1;stroke-dashoffset:${1-p};opacity:${0.3+0.7*p}"/>
 <path d="M500 180 C620 300 650 420 ${720+80*p} 760"
 stroke="currentColor" stroke-width="2" fill="none"
 pathLength="1"
 style="stroke-dasharray:1;stroke-dashoffset:${1-p};opacity:${0.25+0.6*p}"/>
 </svg>`;
}
}
