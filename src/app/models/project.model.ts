export class Project {
    featured: boolean = false;
    recommended: boolean = false;
    constructor(public title: string, public author: string, public img: string, public description: string, public genre: string){}
}
