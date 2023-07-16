class App{
    name:string="Shweta Dhumal";
    constructor(name){
        this.name=name
    }
    getName():string
    {
        return this.name
    }
}
let a1=new App("Rani");
console.warn(a1.getName());