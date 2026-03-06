//Partial: allows you to make all props of a certain data type completely
//Optional
//This is mostly used when you want to 'update' or 'patch' some piece of data
//in an object
interface User {
    name: string;
    age: number;
    email: string;
}

function createUser(user: Partial<User>): User {
    return {
        name: "John",
        age: 20,
        email: "ex@exp.com",
        ...user
    }
}

const newUser = createUser({name: "Something Something"});
console.log(newUser);

//Another example that clearly shows the correct use of it
interface Todo {
    title: string;
    desc: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
    return {...todo, ...fieldsToUpdate};
}

const todo1 = {
    title: "Do something",
    desc: "Like i said do something"
};

const todo2 = updateTodo(todo1, {title: "This task was changed"});
console.log(todo2)


//Awaited<Type>: The unwrapper of objects
//it keeps peeling the layers of a Promise until it reaches its resolved state
type first = Awaited<Promise<string>>; //becomes => type first = string;

type second = Awaited<Promise<Promise<Promise<string>>>>; //becomes => type second = string

type third = Awaited<boolean | Promise<number>>; //becomes => type third = number | boolean
//notice how the the position of boolean and number got interchanged mainly due to number being within an Promise wrapper.

//Required<Type>: The EVIL TWIN of Partial
//where Partial is chill Required is extremely uptight
interface Props {
    a?: string;
    b?: string;
}

const obj: Props = {a: "something"};

//const obj2: Required<Props> = {a: "first"}; //will throw an error saying prop b is missing


//Readonly<T>: makes props readonly
interface NewUser {
    name: string;
    age: number;
}

const obj3: Readonly<NewUser> = {
    name: "Brian",
    age: 23
};

//obj3.name = "Won't allow me to change the name"; //will throw an error here saying property name is readonly
//obj3.age = 12; //same for this as well

//Record<Keys, Type>: Takes the porpeties of an object puts it as Keys takes it values and puts it as Type
type catName = "borris" | "miffy" | "mordy";

interface catInfo {
    age: number;
    breed: string;
}
const cats: Record<catName, catInfo> = {
    miffy: {age: 10, breed: "Persian"},
    borris: {age: 5, breed: "Maine Coon"},
    mordy: {age: 10, breed: "Something Something Breed"}
}
console.log(cats.miffy); //ngl pretty cool

//Pick<Type, Keys>: Creates a Type by picking the set of properties Keys from Type
//analogy Pick Keys from Type.
interface anotherTodo {
    title: string;
    desc: string;
    completed: boolean
}

type TodoPrev = Pick<anotherTodo, "title" | "completed">
const newTodoEntry: TodoPrev = {
    title: "Clean room",
    completed: false
}


//Omit<Type, Keys>: Creates a type by omitting the Keys
interface CriminalRecord {
    name: string;
    crime_desc: string;
    bailed: boolean
}

type CriminalPrev = Omit<CriminalRecord, "crime_desc">; //just like how the Justice System works
const newCriminal: CriminalPrev = {
    name: "Someguy",
    bailed: false
};

//Exclude<UnionType, ExcludedMembers>
type t1 = Exclude<"a" | "b" | "c", "c"> //becomes type t1 => "a" | "b"
type t2 = Exclude<"a" | "b" | "c", "b" | "c"> //becomes type t1 => "a"
type t3 = Exclude<string | number | (() => void), Function> //becomes type t1 => string | number

//Extract<Type, Union>
//From Type Extract given Union if present
type t12 = Extract<"A" | "a" | "b", "A">; //would become t12 => "A"
type t13 = Extract<string | number | (() => void), Function>; //becomes type t13 => (() => void)

//NonNullebale<Type>
//Constructs a Data Type from Type by excluding null and undefined.
type nnable = NonNullable<string | number | undefined>; //will become type nnable => string | number
type nnable1 = NonNullable<string[] | null | undefined> //will become type nnable1 => string[]



//Parameters<Type>
//takes function as Type and returns a tuple of all params within that function
type param = Parameters<() => void>; //becomes type param = [];
type param1 = Parameters<(a: string, b: string) => string>; //becomes type param1 = [string, string]
type param2 = Parameters<(a: string, b: boolean) => void>; //becomes type param1 = [string, boolean]
type param3 = Parameters<(...args: any[]) => any>; //becomes type param1 = any[]
type T4 = Parameters<any>; //type T4 = unknown[]
type T5 = Parameters<never>; //type T5 = never
type T2 = Parameters<<T>(arg: T) => T>; //type T2 = [arg: unknown]
//type T6 = Parameters<Function>; //will throw an error saying 'Function' does not satisfy the constraint '(...args: any) => any'.


//ReturnType<Type>
//Constructs a data type from the return type of the function (meaning Type HAS TO ALWAYS BE A FUNCTION)
type rtr = ReturnType<() => void>; //rtr = void
type rtr1 = ReturnType<(a: string) => string>; //rtr1 = string
type rtr2 = ReturnType<<T>() => T>; //rtr2 = unknown
type rtr3 = ReturnType<<T extends U, U extends number[]>() => T>; //rtr3 = number[]
//above you might ask why isnt it unknown reason is simple
// U <- number[]
// T <- U, so therefore T <- number[] so the () => T this T becomes number[]

//InstanceType<Type>
//Creates a data type that gives you the object that was created when new was used on Type
//meaning Type needs to always be class but it can also be the any keyword or the never keyword.
class C {
    x = 0;
    y = 0;
}

type iT = InstanceType<typeof C> //iT = C
type iT1 = InstanceType<any>; //iT1 = any
type iT2 = InstanceType<never>; //iT2 = never
