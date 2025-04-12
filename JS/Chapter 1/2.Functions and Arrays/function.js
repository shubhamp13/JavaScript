/*
    1.function is set of instructions written in a blcok which can be executed multiple times
    2.function reduces lenghth of the code
    3.modularity

    types of functions
    1.function with no parameters
    2.function with parameters
    3.expression function
    4.arrow functions
*/
//FUnction without parameters
function greet() {
    console.log("hello");

}
greet();
//Function with paramters
function multiply(a, b) {
    console.log(a * b);

}
multiply(10, 20);

//function expression
const add = function (a, b) {
    return a + b;
}
console.log(add(10, 20));

//arrow functions

const sub = (a, b) => {
    return a - b;
}

const square = x => x ** 2;
console.log(square(5));

console.log(sub(20, 10));


//Anonymous function
//function without name is known as anonymous function js
setTimeout(function () {
    console.log("Shubham Puri");
}, 3000);// this function will execute after 3 seconds


//function with default parameters

function m1(name = "shubham") {
    console.log(`Hello ${name}`);
}
m1();
m1("SHubham Pandit Puri");



