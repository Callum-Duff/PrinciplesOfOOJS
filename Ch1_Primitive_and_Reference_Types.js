//-------------------------------------------------------------------------------------------------
//Primitive types
//-------------------------------------------------------------------------------------------------

var name = "Callum";  //Primitiive type string
var count = 25;       //Primitive type number
var cost = 1.51;      //Primitive type number
var found = true;     //Primitive type boolean
var object = null;    //Primitive type null
var flag = undefined; //Primitive type undefined


console.log(typeof name);    //number
console.log(typeof count);   //number
console.log(typeof cost);    //number
console.log(typeof found);   //boolean
console.log(typeof object);  //object not type null!!!! this is a bug in javascript
console.log(typeof flag);    //undefined

//Double vs Triple equals (== vs ===)
console.log("\n");
console.log("5" == 5);  //True => Comparing with coercion. String converted to a number before comparison.
console.log("5" === 5); // False => Comparing without coercion.

console.log(null == undefined);  //True
console.log(null === undefined); //False

//Primitive methods
var lowercaseName = name.toLowerCase();
var firstLetter = name.charAt(0);
var middleOfName = name.substr(1,4);

count = 10;
var fixedCount = count.toFixed(2); //Convert to 10.00
var hexCount = count.toString(16); //Convert to "a"

var flag = true;
var stringFlag = flag.toString(); //Convert to "true"


//-------------------------------------------------------------------------------------------------
//Reference Types
//-------------------------------------------------------------------------------------------------
//Objects are references to memory
var object1 = new Object();
var object2 = object1;

//De-reference objects for garbage collection
object1 = null;
object2 = null;

//Custom properties can be added to objects at any time:
object1 = {};
object2 = object1;
object1.myCustomProperty = "Awesome!";
console.log(object1.myCustomProperty);
console.log(object2.myCustomProperty);
//Properties can also be removed with delete
delete object1.myCustomProperty;
console.log(object1.myCustomProperty); //undefined

//Instantiating built-in types
/*
  The built-in types are Array, Date, Error, Function, Object, and RegExp
 */
var items = new Array();
var now = new Date();
var error = new Error("Something bad happened");
var func = new Function("console.log('hi');");
var object = new Object();
var re = new RegExp("\\d+");

//Literal forms allow for easier instantiation of reference types:
//Object literal form:
const book = {
    name: "The Principles of Object-Oriented JavaScript",
    year: 2014,
    "property name with spaces use strings": 100
};

//Array literal form:
let colors = ["red", "green", "blue"];
console.log(colors[0]);

//Function literal form:
function reflect(value) {
    return value;
}

//Regular expression literal form:
let regEx = /\d+/g;

//Square brackets can be used with a string to access the properties of an object.
//This allows for some powerful patterns where you dynamically decide which method or property to call.
//In this example, the push method is called on the testArray, and the number 12345 is added to the array!
let testArray = [];
let method = "push";
testArray[method](12345);
console.log(testArray);

//Typeof will identify all reference types as objects (other than Functions)
//You can instead use instanceof to identify types:
let items2 = [];
let testObject = {};

function testFunction(value) {
    return value;
}

console.log(items2 instanceof Array); //true
console.log(items2 instanceof Object); //Also true
console.log(testObject instanceof Object); //true
console.log(testFunction instanceof Function); //true
console.log(testFunction instanceof Object); //Also true

//Notice, all reference types inherit from Object. Therefore they will be an instance of Object!!


