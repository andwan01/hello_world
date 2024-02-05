

export default class User{
    private datecreated: Date;
    constructor(){
        this.datecreated = new Date();
    }
    getDateCreated(){
        console.log(this.datecreated)
    }
}


let u = new User();

console.log(u);
