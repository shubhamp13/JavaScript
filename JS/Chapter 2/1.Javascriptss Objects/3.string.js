/*
    1.String is primitive data type in js as well ass it is an Object
    2.Primitive:
        let firstName="shubham";//String primitive with literal
        let lastName=new String("shubham");//String Object

        firstName==lasstName(true) //content comparion
       
       typeof firstName =String
       typeof lastName=Object

        firstName===lastName (false) //type comparion
    **Methods of String***
   let name="Shubham"
   1.name.length;==>To  retrive the length of string and it i property not method
   2.name.toLowerCase();===>To convert String into lower case string
   3.name.toUpperCase();===>To convert given String into upper case string
   4.name.slice(start.end)====> get the string from start index to end-1 index and negative index allowed in slice
   5.name.substring(start,end);====>get the string from start index to end -1 index and negative index not allowed

   6.name.charAt(int index);===>this will give the charcter present at given index

   7.name.indexOf(value);====>it will return the index of value of first occurence

   8.name.lasstIndexOf(value);=====>It will return the last index of given value
   last ocuurence

   9.name.includes(value);===>It will return true or false whether the given string is present in it or not

   10.name.startsWith(value);
        It will check whether the string is starts with given value

   11.name.endsWith(value);
        It will check whether the string is ends with given value

   12.name.split(',');
        This will convert string to an array 

   13.name.trim();
        This will remove the whitepaces from the string

*/
let firstName = "Shubham";
let lastName = new String("Shubham");

console.log(typeof firstName);//String
console.log(typeof lastName);//Object

console.log(firstName == lastName);// true content compare
console.log(firstName === lastName);//false type compare

//Methods of string

let fullName = "Shubham Pandit Puri";
//1.name.length
console.log(`The length of String is ${fullName.length}`);

//2.fullName.toLowerCase()===>Convert string into lower case string and return new tring it doe snot convert old tsring to lower case

let newNameLower = fullName.toLowerCase();
console.log(newNameLower);

//3.fullName.toUpperCase();===>It will convert given string in to uppercase and return new String it does no change orignal string

let newUpper = fullName.toUpperCase();
console.log(newUpper);

//4.fullName.charAt(5);
//This will return the charter at given index

console.log(fullName.charAt(2));

//5.fullName.indexOf('h');
//This will return the index of given value of first occurence

console.log(fullName.indexOf('h'));

//6.fullName.lastIndexOf('h')
//This will return the  index of given value of last occurence

console.log(fullName.lastIndexOf('h'));

//7.fullName.split(',')
//This will convert string to array

let newArray = fullName.split(' ');
console.log(newArray);

//8.fullName.trim()
//This will remove whitepace from string from front and backk
fullName = "             Shubham Puri              ";
console.log(fullName);

console.log(fullName.trim());

//9.fullName.includes("shubham");
//This will check whether the give string is present or not
//return true if present
//return falsse if not present

console.log(fullName.includes("Shubham"));

//10 fullName.substring(0,10);
//This will return the string from index 0 to 9
//negative index not allowed
fullName = fullName.trim();
console.log(fullName.substring(0, 10));

// 11.fullName.slice(0,10
//same like substr() negative index allowed
console.log(fullName);
console.log(fullName.slice(-7));


//11.fullName.startsWith("shubham");
//It will return true if given string starts with provided value else return false
console.log(fullName.startsWith("Shubham"));

//12.fullName.endsWith("puri");
//It will return true  if given string ends with provided value else false


console.log(fullName.endsWith("Puri"));










