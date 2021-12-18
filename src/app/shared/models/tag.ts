export class Tag {

    id: number;
    name: string;

    constructor(tag?: any) {
        tag = tag || {};
        this.name = tag.name || "";
        this.id = tag.id || 0;
        
    }
}
