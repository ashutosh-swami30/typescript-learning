//Abstract classes are those that cannot be instantiated directly
//they must first be inherited first

abstract class AbstractAnimal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    
    abstract makeSound(): void;

    move(): void {
        console.log(`${this.constructor.name} is moving`);
    }
}

class Dog extends AbstractAnimal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} is barking`);
    }
}

const dogAbst = new Dog("Dog");
dogAbst.makeSound();
dogAbst.move();

//The following code will throw an error because we cannot instantiate an abstract class
//const animal = new AbstractAnimal("Animal");