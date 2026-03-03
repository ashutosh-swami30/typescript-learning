class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} is making a sound`);
    }
}

const dog = new Animal("Dog");
dog.makeSound();

//access specifiers being used in constructor params
//public: anyone inside or outside of the class can access this property
//private: Only accessible within the class they are defined and NOT OUTSIDE of class
//protected: Can be accessed within the class its defined and also in its subclasses
class Something {
    constructor(private name: string, public age: number) {}
}

//constructor overloading can also be used in TS
class AnotherClass {
    constructor(x: number, y: number);
    constructor(x:string, y: string);

    constructor(x: any, y: any){
        return x + y;
    }
}

//method overriding is also possible in TS
class ParentClass {
    greet(): void {
        console.log("Hello from ParentClass");
    }
}

class ChildClass extends ParentClass {
    greet(): void {
        console.log("Hello from ChildClass");
    }
}

const parentInstance = new ParentClass();
parentInstance.greet(); // Output: Hello from ParentClass

const childInstance = new ChildClass();
childInstance.greet(); // Output: Hello from ChildClass