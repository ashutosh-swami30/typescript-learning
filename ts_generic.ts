//Generics in TS allow you define functions, classes or interfaces
//that accept multiple data types these will act as placeholders
//for the actual data that will be eventually passed to them

//Case 1: Basic Implementation
function returnArg<T>(arg: T): T {
    return arg;
}

let output = returnArg<string>("Hello");
console.log(output); //Output: Hello

//Case 2: We can use generics on interfaces that can be later
//used by variables to force consistency across the functions that wil be passed
//to the variable

interface genericIdentityFunc {
    <T>(arg: T): T; //this is a function signature
}

function identity<T>(arg: T): T{
    return arg;
}

//doing this is like telling TS that the varibale myId must adhere to the interface (which defines the shape)
//when we pass in the function 'identity' TS will check whether the param lineup matches along with function signature
let myId: genericIdentityFunc = identity;


//Generic Constraints
//They allow us to enforce certain requirements for the generic parameters that will be passed
interface lengthWise {
    length: number;
}

function loggingType<T extends lengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingType(3) //will return an error because number has no .length method
loggingType({length: 3, value: 20}) //this will be accepted

//Using type parameters in constraints
//You can also constraint a type parameter based on another type parameter.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3};
getProperty(x, "a"); //Will output 1
//getProperty(x, "m"); //will show those red squiggly lines indicating "m" is not a key