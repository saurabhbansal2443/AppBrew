"use strict";
// tuples
let arr = ["saurabh", 100];
// tuples is nothing but a fixed array in which we are saying that size is fixed and the type of data is also fixed
// Enums
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["SUPERADMIN"] = "Saurabh";
})(userRoles || (userRoles = {}));
console.log(userRoles.ADMIN);
//
let a; // the type of a is number
a = 10;
let b; // if we have not given any type to this variable then type of this is "any"
b = 20;
b = "saurabh";
b.toLowerCase(); // this is valid in case of "any" type because now b is string (in "any" datatype the ts is kind of not working  )
// "unkown" is also kind of  similar "any"
let c;
c = 10;
c = "bansal";
// c.toLowerCase() ; // it is error
if (typeof c == "string") {
    // this is true in case of unkown ( we have to check the type of variable )
    c.toLowerCase();
}
// void type
function abc() {
    console.log("I am function which is returing nothing ");
}
abc();
function sum(a, b) {
    return a + b;
}
// undefined
let z;
console.log(z);
// type anotation
let n; // it means in n variable  number string and boolean are only  allowed
n = 10;
//n = [1,2,3,4] //not allowed
// interfaces
function abcd(a, b) {
    // now here ts is expecting that a is number b is string
}
function displayUser(obj) {
    console.log(obj.name, obj.email, obj.age);
}
// that mean the obj in function is going to be the type of user interface
displayUser({ name: "saurabh ", email: "sbansal", age: 24 }); // we have to pass these 3 vales in tha obj
let us;
let v = 1; // ( now the value is also one more type that can hold number string boolean )
// OOPS in TS
class Bottle {
    // color = "white"
    // constructor(  color : string ){  // we can use this as well to decalre the variable
    //     this.color = color
    // }
    constructor(color) {
        this.color = color;
        this.radius = 10;
        this.price = 100;
        // if we have used public with this is automatically decalred
        this.color = color;
    }
}
let b1 = new Bottle("black");
console.log(b1);
class user {
    constructor(name, email, age) {
        this.name = "saurabh";
        this.email = "";
        this.age = 0;
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
}
AppBrew.version = 1.2;
console.log(AppBrew.version);
// Functions
function sayName(name) {
    return name;
}
console.log(sayName("saurabh"));
// this is how if we are passing a callback function to function we can declare the dataType of that function
function getDetails(name, cb) {
    console.log(name, cb("software Developer "));
}
getDetails("saurabh bansal ", (work) => {
    return work;
});
// optional and default paramter
function info(name, age, gender) {
    // optional paramter (gender )
    console.log(name, age, gender);
}
info("saurabh", 24, "male");
info("anyPerson", 18);
function info2(name, age = 10) {
    // default parameter
    console.log(name, age);
}
info2("saurabh", 24);
info2("saurabh");
// spread operator  && rest parameter
function add(...args) {
    return args.reduce((acc, item) => acc + item);
}
console.log(add(1, 2, 3, 44, 5));
// generics functions 
// this is generic functions where we basically donot know the type of paramter which is going to come to the functions 
// so we have created the <t> generic 
function log(a) {
    console.log(typeof a);
    console.log(a);
}
log(5); // in this case we have mentioned that it is going to be number 
log('saurabh'); // in this case it automatically assume the arguments is string 
// while calling this function we have clearly mentioned the id is number 
function showProduct(product) {
}
showProduct({ name: "saurabh", age: 24, id: 23, stock: "no" });
// functions 
function kij(a, b) {
    // return <T> "hey"                  // both the return statement are correct 
    return "hey";
}
kij("h", "ey");
// here in this functions we have mentioned that T is generic still when we are going to return this we should perform a type change in this 
// because T is generic and "hey" is string 
// Type assertion 
let ac;
//(ac as string)
//(<number>ac)
// type narrowing 
class tvRemote {
    switchTvOff() {
        console.log(" Switch off tv ");
    }
}
class carRemote {
    swicthCarRemote() {
        console.log("switch off car ");
    }
}
let tv = new tvRemote();
let car = new carRemote();
function switchOff(device) {
    if (device instanceof tvRemote) {
        device.switchTvOff();
    }
    else if (device instanceof carRemote) {
        device.swicthCarRemote();
    }
    else {
        throw new Error("Device not compatible ");
    }
}
