class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
getradius(){
    return `${this.radius}`;
}
setradius(radii){
    this.radius=radii;
    
}
getcolour(){
    
    return `${this.color}`;
}
setcolor(c){
    this.color=c;
    
}
toString(){
    return `circle [${this.radius}, ${this.color}]`; 
}
getarea(){
     return `${Math.PI*this.radius*this.radius}`;

}
getcircumference(){  
  return `${2*Math.PI*this.radius}`;
}
}

const circle = new Circle(1.0,"red");

console.log(circle.getradius());
console.log(circle.setradius(1.5));
console.log(circle.getcolour());
console.log(circle.setcolor("green"));
console.log(circle.toString());
console.log(circle.getarea());
console.log(circle.getcircumference());