/*1.The type of value variable can hold is known as data type
    In Javascript there are mainly two data types

    1.Primitive data type
    2.Non Primitive Data type


    1.Primitive Data Types:
        1.The data type which is already known by the compiler are known as Primitive data type

        1.Number
        2.String
        3.Boolean
        4.Symbol
        5.undefined
        6.null
        7.BigInt
    Javascript is dynamically typed language so we do not need to maintain type of data explicitely like other languages
    int a=10;//This is explicitely informing to the compiler that variable a can store only integer type data

    But JS is dynamically type so it will store any type of data
    let a=2;//Number
    let b="shubham"//String
    let c=True//Boolean
    let d=null//Null
    let e=undefined//undefined
    let f=Symbol(10)//Symbol
*/

let a = 10;
console.log(`Type of a is ${typeof a}`);//number

let b = "Shubham";
console.log(`Type of b is ${typeof b}`);//string

let c = false;
console.log(`Type of c is ${typeof c}`);//Boolean

let d = null;
console.log(`Type of d is ${typeof d}`);//Object

let e = undefined;
console.log(`Type of e is ${typeof e}`);//Undefined




