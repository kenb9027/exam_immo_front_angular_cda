export class Agent {

    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
    tel: string;
    isAdmin: boolean;
    

    constructor(agent?: any) {
        agent = agent || {};
        this.id = agent.id || 0;
        this.name = agent.name || "";
        this.age = agent.age || 1;
        this.email = agent.email || "";
        this.password = agent.password || "" ;
        this.tel = agent.tel || "";
        this.isAdmin = agent.isAdmin || false;
        
    }

}
