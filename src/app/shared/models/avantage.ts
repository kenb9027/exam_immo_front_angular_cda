export class Avantage {

    name: string;

    constructor(avantage?: any) {
        avantage = avantage || {};
        this.name = avantage.name || "";
        
    }
}
