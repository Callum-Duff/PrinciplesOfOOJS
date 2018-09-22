//Functions are Objects with the special internal property [[call]] which means they are able to be executed.
//Because functions in JS are objects, they behave differently from functions in other languages.

//--------------------------------------------------------------------------------------------------------------------
//Function declaration
function add(num1, num2) {
    return num1 + num2;
}

//Anonymous functions are function objects that don't have names
let add2 = function(num1, num2) {
    return num1 + num2;
}; //Notice semicolon here when using anonymous functions

//NOTE: Function declarations are hoisted!!
//Function hoisting will not occur for anonymous functions!
//This code will run fine!
let test = divide(10, 5);

function divide(num1, num2) {
    return num1 / num2;
}

//--------------------------------------------------------------------------------------------------------------------
//Functions as values:
//Functions can be assigned to variables and used the same way
//This is because functions are first class functions in javascript (they are objects!)
function sayHi() {
    console.log("hello!");
}

let sayHi2 = sayHi;
sayHi2(); //Puts "hello!"

//Sorting functions take a function as a parameter!
let numbers = [1, 4, 8, 4, 7, 10, 2, 6];
//We pass an anonymous function into the sort method on the array:
//If no function is passed to sort, the default function will convert all elements to strings and compare them
numbers.sort(function(first, second) {
    return first - second;
});
console.log(numbers); //Numbers are now sorted: 1 ,2 , 4, 4, 6, 7, 8, 10

//--------------------------------------------------------------------------------------------------------------------
//Function parameters:
//passing the incorrect number of parameters into a function in JS does not produce an error!
//This is because function parameters are stored in an array-like object (NOT AN ACTUAL ARRAY!) known as arguments
//Named function parameters exist merely for convienience and readabiltiy!!
//Example:
function reflect(value) {
    return value;
}

console.log(reflect("Hi")); //"Hi"
console.log(reflect("Hi", 25)); //"Hi"
console.log(reflect.length); // 1

reflect = function () {
    return arguments[0];
};
console.log(reflect("Hi")); //"Hi"
console.log(reflect("Hi", 25)); //"Hi"
console.log(reflect.length); // 0 because function has no named parameters!

//This comes in handy wan you want to write a function that allows for variable amounts of arguments:
function sum() {
    let val = 0, i = 0, len = arguments.length;
    while (i < len) {
        val += arguments[i];
        i++;
    }
    return val;
}

console.log(sum(1, 2, 3, 4, 5)); //15
console.log(sum()); //0
console.log(sum(20000, 13, 122)); //20135

//--------------------------------------------------------------------------------------------------------------------
//Overloading
//Because JS functions can take any number of arguments, they don't have unique function signatures
function sayMessage(message) {
    console.log(message);
}

function sayMessage() {
    console.log("Default Message");
}

sayMessage("Hello!"); //Prints "Default Message"
//In JS, when you create multiple functions with the same name the one that comes last wins
//This is because functions are simply objects that can be replaced with references to new functions

//In JS you can mimic the function overloading functionality that is present in other languages like so:
function sayMessage(message) {
    if (arguments.length === 0) {
       message = "Default message";
    }
    console.log(message);
}

sayMessage("hello!"); //Outputs "hello!"
sayMessage();         //Outputs "Default message"


//--------------------------------------------------------------------------------------------------------------------
//Object Methods
//When a property of an object is a function, it is called an object method
let person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};
person.sayName();
//Every scope in JavaScript has a this object that references the calling object for that function
//In the global scope,'this' represents the global object (the window for web browsers)
//When a function is called while attached to an object, the value of 'this' is that object by default
//Ex:
function sayNameForAll() {
    console.log(this.name);
}

let person1 = {
    name:"John",
    sayName: sayNameForAll
};

let person2 = {
    name: "Joe",
    sayName: sayNameForAll
};
person1.sayName();
person2.sayName();

//--------------------------------------------------------------------------------------------------------------------
//Changing the value of 'this'
//There are 3 different function methods that allow you to change the value of this
//--------------------------------------------------------------------------------------------------------------------
//The call() method
//The call method executes the function with a specific this value and parameters
//The first parameter to call is the value that the 'this' object should have