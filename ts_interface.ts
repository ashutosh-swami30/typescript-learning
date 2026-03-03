//In TS interfaces are used to define the structure of the object
interface Person {
    name: string;
    age: number;
};

const person: Person = {
    name: "Jon",
    age: 23
};

//Interface inheritance
//You can inherit properties or methods from one interface to another
//using the `extends` keyword
interface Shape {
    width: number;
    height: number;
};

interface squareShape extends Shape {
    sideLength: number;
}

let square: squareShape = {
    width: 10,
    height: 10,
    sideLength: 2
};  


//constructor params
//in TS you can use access modifiers like public, private and protected 
//on the params of a class
class Example {
    constructor(private name: string, public age: number){}
}





