/*The statements which controls the flow of execution of program are known as control statements
    1.condition statements
    2.switch statements
    3.looping statements
*/

//condition statements

let marks = 98;

if (marks > 60 && marks <= 100) {
    console.log("Passed with first class");
} else if (marks > 70 && marks <= 100) {
    console.log("Passed with distinction");
}
else if (marks > 80 && marks <= 100) {
    console.log("You are passed with first class with disticntion");
}
else {
    console.log("Just Passed");
}

//switch statement

let day = 11;
switch (day) {
    case 1: console.log("Sunday");
        break;

    case 2: console.log("Monday");
        break;

    case 3: console.log("Tuesday");
        break;

    case 4: console.log("Wednesday");
        break;
    default:
        console.log("default case");
}

//loopong statements

//1.for loop

let sum = 0;
for (let a = 1; a <= 10; a++) {
    sum += a;
}
console.log(sum);

sum = 0;
//2.while loop
let a = 0;
while (a <= 20) {
    sum += a;
    a++;
}
console.log(sum);

//do....while

do {
    console.log("hello");
} while (false);

//ternary operator

let name = 10 > 20 ? "shubham" : "puri";
console.log(name);
