export function mountProgress(){
 if(document.getElementById('scroll-progress')) return;
 const wrap=document.createElement('div');
 wrap.id='progress-container';
 wrap.setAttribute('aria-hidden','true');
 wrap.style.cssText='position:fixed;left:0;top:0;width:100%;height:4px;z-index:9999;background:transparent';
 const bar=document.createElement('div');
 bar.id='scroll-progress';
 bar.style.cssText='height:100%;width:0%;transition:width .35s ease';
 wrap.append(bar);
 document.body.append(wrap);
}
