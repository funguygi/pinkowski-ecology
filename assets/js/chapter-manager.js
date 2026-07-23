export class ChapterManager{
constructor(chapters){this.chapters=chapters;}
current(i){return this.chapters[i]??null;}
}
