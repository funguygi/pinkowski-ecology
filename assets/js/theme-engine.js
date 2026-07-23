export class ThemeEngine{
constructor(){this.root=document.documentElement;}
apply(theme){this.root.dataset.theme=theme;}
}
