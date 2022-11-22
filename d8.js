// let a = [1,2,3];
 // let b = [4,5,6];
// let c = [...a,...b];
// console.log(c);

// let sumnumber  = (...mad)=> {
//     let add = 0;
//     for (let b of mad){
//         add = add + b;
//     }
//     return  add;
// }
// let a =sumnumber(2,45,25,15,785,46,85);
// // console.log(a);

// let min = parseInt(prompt("enter the min value"));
// let max = parseInt(prompt("enter the max value"));

// let c = Math.floor(Math.random () * (max - min + 1) + min);
// console.log(`the ramdam value is ${c}`);    

// let a = prompt("enter the number :");

// if (a > 0){
//     console.log("the number is postive")
// }
// else if (a == 0 ){
//     console.log("the numeber equal to 0")
// }
// else {
//     console.log("the number is negative")
// }

// const n = 5
//  for(let i = 1; i <= n; i++) {
//     console.log(`fuck u`);
//  }

 // program to display text 5 times
// const n = 5;

// looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// let sum = 0;
// const n = 69

// for (let i = 1 ; i <=n; i++){
// sum = sum + i;
// }
// console.log(sum);

// let result;
// const operation = prompt("enter the operation( +,-,*,/)");
// const number1 = parseFloat(prompt(" enter the first value"));
// const number2 = parseFloat(prompt("enter the sec number"));

// switch(operation) {
//     case '+':
//          result = number1 + number2;
//         console.log(`${number1}+${number2}=${result}`);
//         break;
//     case '-':
//          result = number1 - number2;
//         console.log(`${number1}-${number2}=${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1}*${number2}=${result}`);
//         break;
//     case'/':
//          result = number1 / number2;
//         console.log(`${number1}/${number2}=${result}`);
//         break;    
//     default:
//         console.log("invalide operation");        

// }

// let arrow =(a,b)=> {
//     let result = a+b
//     return result;
// }

// let arr = arrow(4,6);
// console.log(arr);

// let a = parseFloat(prompt("enter the number"));
// let b = parseFloat(prompt("enter the number"));
// let c = parseFloat(prompt("enter the number"));
// let sum = Math.min(a,b,c);
// console.log(sum);

// let a = parseFloat(prompt("enter the number"));
// if (a<0){
//     console.log("the number is negative");
// }
// else if (a == 0){
//     console.log("the number is zero")
// }
// else {
//     let b = 1;
//     for(i=1;i<=a;i++){
//     b *=i;    
// }
// console.log(b);
// }

// const number = parseInt(prompt("enter the number:"));
// let b=[];

// for(let i=1;i<=3;i++) {
//      b = i * number;
//      console.log(b);
// }


// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

// program to check if the string is palindrome or not

//  let check= (string) => {
//     const sep =string.split('');
//     let oct = sep.reverse();
//     const nov = oct.join('');
//     if(string == nov) {
//         console.log('palindrome');
//     }
//     else {
//         console.log('not palindrome');
//     }

// }
// const string = prompt("enter the string");
// check(string);

// program to perform case insensitive string comparison

// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';

// const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });
// if(result == 0) {
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.');
// }

// let arr = (rev)=>{
//     let re ="";
//     for (let i=rev.length -1; i>=0; i--) {
//         re += rev[i];
//     }
//     return re;
//     }
//     const sting =prompt("enter the sting;");
//     const rr = arr(sting);
// console.log(rr);

let creat = {
    name: 'santhosh',
    age : 23,
    hobbies : ['reading','playing'],
    greet: function() {
        console.log('hello world');
    },
    score:{
        maths:'95',
        sience:'92',
    }
};
console.log(creat);
console.log(creat.age);
creat.greet();
console.log(creat.score.maths);
  