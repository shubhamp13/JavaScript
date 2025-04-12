/*  Array In Js:
    1.An array is collection of elemnents stored in single variable is known as array
    2.Elememnts stored in array can be of any type
    3.Array is indexed collection of elements stored in single variable
    4.We can access array using the index
    5.Array index start from 0
    6.We can get length of an array using .length property
    let arr=[1,2,3,4,5,6,7,8];
    console.log(arr.length);//it returns the length of an array
    6.Methods of array:
        1.arr.push(10);-->This will add element at the end of an array
        2.arr.pop();--->this will remove last element of an array
        3.arr.shift();---->this will remove first element of an array
        4. arr.unshift(0);--->add element at the begining of an array
        5. arr,indexOf(5);---->It will return the index of an elemnt present inside array
        6.arr.includes(8);--->It will check whether value is present or not
        7.arr.join(",");----->It will convert array into string
        8.arr.slice(start,end);---->it will extract part of an array
        9.arr.reverse();--->Reverse an array
        10.arr.sort();----->sorts an array in natural sorting order
*/


let names = ['shubham', 'pandit', 'puri', 'sejal', 'pravin', 'patankar'];

for (let a = 0; a < names.lengt; a++) {
    console.log(names[a]);
}

//methods of an array
/*
1.arr.push(element);
It is used to insert elment at the end of an array
*/
names.push("MCA");
console.log(names);


/*
2.arr.pop();
    This will remove last element of an array
*/
names.pop();
console.log(names);


/*
    3.names.shift();
    This will remove first element of an array
*/
names.shift();
console.log(names);

/*
    4.names.unshift("shubham");
        This will add element at the begining of an array
*/
names.unshift("Shubham");
console.log(names);

/*
    5.names.join(",");
        This will  return the string  format of an array
*/
let n = names.join(",");
console.log(n);


/*
     6.names.slice(start,end);
        It will create an array from start to end index and remove that elements from orignal array
*/
let newArray = names.splice(0, 3);
console.log(newArray);

/*
    7.names.indexOf("puri");
    It will return an index of an given element
*/
console.log(names);
console.log(names.indexOf("sejal"));

/*
    8.names.includes("sejal");
     It will check whether the given element is present inside array or not
     if present it will return true else return false
*/
console.log(names.includes("sejal"));


/*
    9.names.reverse()
        it will reverse an array
*/

console.log(names);
console.log("After reverse");
console.log(names.reverse());
console.log(names);

/*
    10.names.sort()
        It will sort an array using natural sorting order
*/
names.push("akay");
names.push("zebra");
console.log(names);

names.sort();
console.log(names);


//for in loop
//for in loop will iterate array using indexes

let nums1 = [8, 7, 9, 3, 5, 6, 9, 6, 3, 1];
console.log(nums1);

for (let num in nums1) {
    console.log(num);
}


//for of loop

//for of loop will iterate array using elements 
console.log("for of loop");

for (let x of nums1) {
    console.log(x);
}








