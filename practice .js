// way to console
// console.log('hellow');
// alert("hello");
// document.write('hellow');

// add to number expamle 1
// let a = parseInt(prompt(`first number`));
// let b = parseInt(prompt(`sec number`));
// let c = [a + b];
// console.log(` ${a} + ${b} = ${c}`);

// example 2
// let a = 5;
// let b = 5;
// let c = [a + b];
// console.log (c);

// to find squr root

// let a = prompt('enter the number');
// let b = Math.sqrt(a);
// console.log(`the squar root of ${a} is ${b}`)

// let a =prompt('enter the number');
// let b =prompt('enter the number');
// let c =prompt('enter the number');

// let d = Math.sqrt(a);
// let e = Math.sqrt(b);
// let f = Math.sqrt(c);


// console.log(`the square root of ${a} is ${d}`);
// console.log(`the square root of ${b} is ${e}`);
// console.log(`the square root of ${c} is ${f}`);

//area of traingle 

// let length = prompt('enter the length:');
// let height = prompt('enter the height:');

// let areaValue =(length * height)/2;

// console.log( `The area of the triangle is ${areaValue}`);

//  program to swap two variables
// let a = prompt('enter the first value');
// let b = prompt('enter the sec number');
// let swap;
// swap = a;
// a = b;
// b = swap;
// console.log(`value of after swap ${a}`);
// console.log(`value of after swap ${b}`);

// let a = prompt('enter the first value');
// let b = prompt('enter the sec number');
// //using destructuring assignment es6
// [a,b] = [b,a];
// console.log(`value of after swap ${a}`);
// console.log(`value of after swap ${b}`);

// to find the quatatic equation
// let root1, root2;

// let a = prompt('enter the first of a');
// let b = prompt('enter the value of b');
// let c = prompt('enter the value of c');

// let discriminant = b*b - 4 * a * c

// if(discriminant>0){

// root1 =(-b +Math.sqrt(discriminant))/(2*a);
// root2 =(-b -Math.sqrt(discriminant))/(2*a);

// console.log(`the ${root1} and ${root2}`);
// }
// else if(discriminant === 0) {

// root1 = root2 = -b /(2*a);
// }
// console.log(`the root is ${root1} and ${root2}`);

// else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log( `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
// }

// to find miles

// const kiolometer  = prompt('enter the kiolometer:' );
// const factor = 0.621371;

// const miles = kiolometer * factor;

// console.log(`the ${kiolometer} and miles is ${miles}`)


// to fine the odd r even

// let a =prompt("enter the number:");

// if(a % 2 ==0) {
// console.log("its the even number");
// }
//  else {
//     console.log("its the odd number");
//  }
// using ternary operator
// let a = prompt("enter the value:");

// let b =(a % 2 == 0) ? "even" : "odd";

// console.log(`${b}`);

// let a = parseFloat(prompt("enter the number"));
// let b = parseFloat(prompt("enter the number"));
// let c = parseFloat(prompt("enter the number"));

// let d = Math.max(a,b,c);
// console.log(d);


// let a = prompt("enter the number:");

// if(a>0) {
//     console.log("the number is positive")
// }
// else if (a == 0){
//     console.log("number is zero");
// }
// else {
//     console.log("number is negative");
// }

// function sum(n1,n2){
//     return n1+ n2;
// }
// let a = parseInt(prompt("enter the value"));
// let b = parseInt(prompt("enter the value"));

// let c =sum(a,b);
// console.log(+c);

