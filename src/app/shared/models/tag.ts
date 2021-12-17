export class Tag {

    name: string;

    constructor(tag?: any) {
        tag = tag || {};
        this.name = tag.name || "";
        
    }
}
