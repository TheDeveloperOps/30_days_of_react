class Parent{
    constructor(firstName,lastName,country,title){
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.title= title;
    }
    getPersonInfo(){
        return `${this.firstName} ${this.lastName}, a ${this.title} developer based in ${this.country}`
    }
    parentMethod(){
        // not yet writen anything on parent method
    }
    
}
const p1=new Parent('Balamurugan','Ganesan','India','ReactJS')

class childClass extends Parent{
    constructor(firstName,lastName,country,title,skills){
        super(firstName,lastName,country,title)
        this.skills = skills;
    }
    getSkills(){
        let len = skills.length;
        return len>1 ?this.skills.join(" "):'No skills found'
    }
    childMethod(){
        /// not written anything
    }
}
const skills =['HTML','CSS','REACT']
const child=new childClass(
    'BalaMurugan','Ganesan','India','Reactjs',skills
)
console.log(child)