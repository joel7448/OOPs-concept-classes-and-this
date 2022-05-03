class person{
    constructor(name,age,weigth,heigth,residence,bloodgroup)
    {
       this.name=name;
        this.age=age;
        this.weigth=weigth;
        this.heigth=heigth;
        this.residence=residence;
        this.bloodgroup=bloodgroup;
    }
    getdetails(){
        return`
        Name : ${this.name}
        age : ${this.age}
        weight : ${this.weigth}
        height : ${this.heigth}
        residence : ${this.residence}
        bloodgroup :${this.bloodgroup}`;

    }
} 
var details= new person("Joel",22,75,170,"Kolathur","A+ve"); 
console.log(details.getdetails());