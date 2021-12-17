export class Property {

    title: string;
    price: number;
    sector: string;
    rooms: number;
    description: string;
    picture: string;
    AgentId: number;
    TypeId: number

    constructor(property?: any) {
        property = property || {};
        this.title = property.title || "";
        this.price = property.price || 1;
        this.sector = property.sector || "";
        this.rooms = property.rooms || 1 ;
        this.description = property.description || "";
        this.picture = property.picture || "";
        this.AgentId = property.AgentId || 1;
        this.TypeId = property.TypeId || 1;
    }

}
