//TypeScript functions can be of two types
//One is the normal function declaration
//and the other being function expression

//Function declaration
function func(fname: string, sname: string): string{
    return fname + sname;
}

let test = func("Ashutosh", "Swami")
//console.log(test)


//Function expression
let getFullName = function(fname: string, sname: string): string {
    return fname + sname;
}

//console.log(getFullName("Ashutosh", "Swami"))


//In typescript functions can be typed in a few different ways to indicate
//the input params and return type of the function

//Func declaration with types
function add(a: number, b: number): number {
    return a + b;
}

//Arrow function with types
let multiply = (a: number, b: number): number => {
    return a * b;
}

//function type
let divide: (a:number, b:number) => number;

divide = (a, b) => {
    return a/b;
}


//In TS, you can also do function overloading
//multi functions with same name but with different params
function add1(a: number, b:number): number;
function add1(a: string, b: string): string;

function add1(a:any, b:any) {
    return a + b;
}

console.log(add1(1,2));
console.log(add1("Ashutosh", "Swami"));

