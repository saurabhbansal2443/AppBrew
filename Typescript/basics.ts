// tuples

let arr: [string, number] = ["saurabh", 100];

// tuples is nothing but a fixed array in which we are saying that size is fixed and the type of data is also fixed

// Enums

enum userRoles {
  ADMIN = "admin",
  SUPERADMIN = "Saurabh",
}

console.log(userRoles.ADMIN);

//

let a: number; // the type of a is number

a = 10;

let b; // if we have not given any type to this variable then type of this is "any"

b = 20;
b = "saurabh";

b.toLowerCase(); // this is valid in case of "any" type because now b is string (in "any" datatype the ts is kind of not working  )

// "unkown" is also kind of  similar "any"

let c: unknown;

c = 10;

c = "bansal";

// c.toLowerCase() ; // it is error

if (typeof c == "string") {
  // this is true in case of unkown ( we have to check the type of variable )
  c.toLowerCase();
}

// void type

function abc(): void {
  console.log("I am function which is returing nothing ");
}

abc();

function sum(a: number, b: number): number {
  return a + b;
}

// undefined

let z: undefined;

console.log(z);

// type anotation

let n: number | string | boolean; // it means in n variable  number string and boolean are only  allowed

n = 10;
//n = [1,2,3,4] //not allowed

// interfaces

function abcd(a: number, b: string) {
  // now here ts is expecting that a is number b is string
}

// what if it is going to be a object in which there are certain property for that we have make interface

interface user {
  name: string;
  email: string;
  age: number;
  gender?: string; // ( the gender is now optional )
}

interface admin extends user {
  // admin has all the property of user and also it has one more property admin
  admin: boolean;
}

function displayUser(obj: user) {
  console.log(obj.name, obj.email, obj.age);
}

// that mean the obj in function is going to be the type of user interface

displayUser({ name: "saurabh ", email: "sbansal", age: 24 }); // we have to pass these 3 vales in tha obj

// Exmaple 2

interface abcd {
  name: string;
}

interface abcd {
  email: string;
}

// now the interface abcd has both name and email

// type alliaces

type value = number | string | boolean; // this is union

type user1 = {
  name: string;
  email: string;
};

type admin1 = user1 & {
  // this is intersection
  admin: boolean;
};

let us: admin1;

let v: value = 1; // ( now the value is also one more type that can hold number string boolean )

// OOPS in TS

class Bottle {
  radius = 10;
  price = 100;

  // color = "white"

  // constructor(  color : string ){  // we can use this as well to decalre the variable
  //     this.color = color
  // }

  constructor(public color: string) {
    // if we have used public with this is automatically decalred
    this.color = color;
  }
}

let b1 = new Bottle("black");

console.log(b1);

class user {
  public name: string = "saurabh";
  public email: string = "";
  public age: number = 0;

  constructor(name: string, email: string, age?: number) {
    this.name = name;
    this.email = email;

    if (typeof age == "number") {
      this.age = age;
    }
  }
}

let u1 = new user("saurabh", "sbansal24@ymail.com");

console.log(u1);

//   Static

class AppBrew {
  static version = 1.2;
}

console.log(AppBrew.version);

// Functions

function sayName(name: string): string {
  return name;
}

console.log(sayName("saurabh"));

// this is how if we are passing a callback function to function we can declare the dataType of that function
function getDetails(name: string, cb: (work: string) => string): void {
  console.log(name, cb("software Developer "));
}

getDetails("saurabh bansal ", (work) => {
  return work;
});

// optional and default paramter

function info(name: string, age: number, gender?: string) {
  // optional paramter (gender )
  console.log(name, age, gender);
}

info("saurabh", 24, "male");

info("anyPerson", 18);

function info2(name: string, age: number = 10): void {
  // default parameter
  console.log(name, age);
}

info2("saurabh", 24);

info2("saurabh");

// spread operator  && rest parameter

function add(...args: number[]): number {
  return args.reduce((acc, item) => acc + item);
}

console.log(add(1, 2, 3, 44, 5));


// generics functions 

// this is generic functions where we basically donot know the type of paramter which is going to come to the functions 
// so we have created the <t> generic 

function log<t>(a : t ){
    console.log(typeof a)  
    console.log(a);
}

log<number>(5) // in this case we have mentioned that it is going to be number 

log('saurabh')   // in this case it automatically assume the arguments is string 


// similary we can use the generics in interfaces 
// In this case id is at this point of time we dont know what is going to be the type of id so we have used generics 
interface  product<T , X >{
    name : string,
    age : number,
    id : T,
    stock : X ,
}

// while calling this function we have clearly mentioned the id is number 

function showProduct(product: product<number , string>): void {

}

showProduct({name : "saurabh" , age : 24 , id : 23 , stock :  "no"})


// functions 


function kij<T> ( a : T  , b : T ) : T {
   // return <T> "hey"                  // both the return statement are correct 
   return "hey" as T 
} 

kij("h" , "ey" )


// here in this functions we have mentioned that T is generic still when we are going to return this we should perform a type change in this 
// because T is generic and "hey" is string 


// Type assertion 

let ac : any ;  

//(ac as string)
//(<number>ac)


// type narrowing 

class tvRemote{
    switchTvOff(){
        console.log( " Switch off tv ")
    }
}

class carRemote{
    swicthCarRemote(){
        console.log("switch off car ")
    }
}

let tv = new tvRemote();
let car = new carRemote();

function switchOff( device : tvRemote | carRemote){

    if ( device instanceof tvRemote ){
        device.switchTvOff()
    }else if (device instanceof carRemote){
        device.swicthCarRemote()
    }else {
        throw new Error("Device not compatible ")
    }
}
