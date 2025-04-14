/*
    An Object in javascript is collection of key value pair where keys are strings or symbols and values are of any types

    Objects are used to group data members with its member functions
    keys are also known as properties
    

    ***Methods of Objects***
   1.Object.keys(objectName);
   2.Object.valueS(objectName);
   3.Object.entries(objectName);
*/

let person = {
    name: 'shubham',
    age: 26,
    address: "Pune",

    display() {
        console.log(`Name:${this.name}`);
        console.log(`Age:${this.age}`);
        console.log(`Address:${this.address}`);
    }
};
person.display();

let keys = Object.keys(person);
console.log(typeof keys);
console.log(keys);

let values = Object.values(person);
console.log(typeof values);
console.log(values);

let entries = Object.entries(person);
console.log(typeof entries);
console.log(entries);









