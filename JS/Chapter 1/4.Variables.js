/*
    Variables are the container in which we store the data 
    1.Javascript uses three keywords to store the differnt type of data
        1.let
        2.var
        3.const
    
    1.let
        1.let is block scoped variable in js
            {
                //scope of let
            }
        2.reinitialize of let variable is allowed
            {
                let a=10;
                a=20; //reinitialization of variable is allowed
            }
        3.redeclaration of let  variable is not allowed
            {
                let b=10;
                let b=29; //Redeclaration is not allowed
            }
        4.let is hoisting but not initialized

            (hoisting  means accessing variable,function class before declaration)
            {
                console.log(a);//refernce error
                let a=10;
            }
    
    2.var
        1.var have function scope
        2.We can reinitialize var variable
            {
                var a=10;
                a=20;//reinitializing allowed
            }
        3.we can redeclare var variable
            {
                var c=10;
                var c="shubham"; // redeclartion allowed
            }
        4.var is hoisted and initialized with undefined
            {
                console.log(y);//undefined
                var y=10;
            }
    3.const
        1.const variables have block level scope
            {
                const a=10;
                console.log(a);//10
            }
            console.log(a);//out of scope


        2.We can not reinitialize const variable once declared and we have to provide value at the time of declaration
        
        {
            const a=30; //we have to provide value at the time of declration
            a=10; // we can not reinitialize it also
        }
        
        3. we can not redeclare const variable also
        {
            const b=10;
            const b="shubham";//redeclartion  of const variable is not allowed
        }
*/

// console.log(name);//hoisting allowed but not initialized (ReferenceError: Cannot access 'name' before initialization)
let name = "shubham";
console.log(name);
{

    let a = 10;
    // let a = "shubham";//Redeclaration not allowed (" Identifier 'a' has already been declared")
    console.log(a);
    a = 30;
    console.log(a);//reinitialized allowed
}
// console.log(a);//block level scope ("ReferenceError: a is not defined")

//var

console.log(a);//undefined
//hoisting allowed and initialized with undfined
var a = 10;
var a = "shubham";//redeclration allowed
a = 10;//reinitalization allowed
{
    var s = 585;
}
console.log(s);//function level scope


//const

// const p;
//we can not jus declare const variable we have to initialize it at the type of declration only

// console.log(q);//hoisting allowed but we will get refernce error using before initializing
const q = "shubham";
// q = "puri";//reinitalization not allowed

{
    const uy = 10;
}
console.log(uy);//block level scope (ReferenceError: uy is not defined)





