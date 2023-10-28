// Do the below programs in anonymous function & IIFE
//Q1.Print odd numbers in an array
// Anonymous Function:

// var Odds = function(a) {
//     for (var i = 0; i < a.length; i++) {
//         var b = a[i];
//         if (b % 2 !== 0) {
//             console.log(b);
//         }
//     }
// };

// Odds([1, 2, 3, 4, 5]);

// IIFE:

// (function(a1) {
//     for (var i = 0; i < a1.length; i++) {
//         var b1 = a1[i];
//         if (b1 % 2 !== 0) {
//             console.log(b1);
//         }
//     }
// })([1, 2, 3, 4, 5,6,7]);


// Arrow Function:

// var oddsarrow = a2 => {
//     for (var i = 0; i < a2.length; i++) {
//         var b3 = a2[i];
//         if (b3 % 2 !== 0) {
//             console.log(b3);
//         }
//     }
// };

// oddsarrow([1, 2, 3, 4, 5,6,7,8,9,10,11]);

//Q2.Convert all the strings to title caps in a string array

// Anonymous Function:
// var Caps = function(a) {
//     for (var i = 0; i < a.length; i++) {
//         var b = a[i];
//         var result = b[0].toUpperCase();
//         for (var j = 1; j < b.length; j++) {
//             result += b[j].toLowerCase();
//         }
//         a[i] = result;
//     }
//     return a;
// };

// console.log(Caps(["tom", "mike", "john"]));

// IIFE:
// var iifecaps = (function(a1) {
//     for (var i = 0; i < a1.length; i++) {
//         var b1= a1[i];
//         var result = b1[0].toUpperCase();
//         for (var j = 1; j < b1.length; j++) {
//             result += b1[j].toLowerCase();
//         }
//         a1[i] = result;
//     }
//     return a1;
// })(["iifetom", "iifemike", "iifejohn"]);

// console.log(iifecaps);

// // Arrow Function:
// var arrowcaps = a2 => {
//     for (var i = 0; i < a2.length; i++) {
//         var b2 = a2[i];
//         var result = b2[0].toUpperCase();
//         for (var j = 1; j < b2.length; j++) {
//             result += b2[j].toLowerCase();
//         }
//         a2[i] = result;
//     }
//     return a2;
// };

// console.log(arrowcaps(["arrtom", "arrmike", "arrjohn"]));


//Q3.Sum of all numbers in an array 

// Anonymous Function:
// var sumArray = function(a) {
//     var sum = 0;
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// };

// console.log(sumArray([1, 2, 3, 4, 5]));

// IIFE:
// var result = (function(a) {
//     var sum = 0;
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// })([1, 2, 3, 4, 5,6]);

// console.log(result);


//Arrow:
// var sumArray = a => {
//     var sum = 0;
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i];
//     }
//     return sum;
// };

// console.log(sumArray([1, 2, 3, 4, 5,6,7]));


//Q4.Return all the prime numbers in an array

//// Anonymous Function:
// function pm(arr) {
//     var primes = [];  
    
//     for (var i = 0; i < arr.length; i++) 
//     {
//         var num = arr[i];
//         var isPrime = true;  
//         for (var j = 2; j < num; j++) 
//         {
//             if (num % j == 0) 
//             {
//                 isPrime = false; 
//                 break;  
//             }
//         }
//         if (isPrime && num > 1) 
//         {
//             primes.push(num);
//         }
//     }
//     return primes;  
    
// }
// console.log(pm([1,2,3,4,5,6,7,8,9,10]))


//IIFE:
// var primes = (function(arr) {
//     var primes = [];
//     for (var i = 0; i < arr.length; i++) {
//         var num = arr[i];
//         var isPrime = true;
//         for (var j = 2; j < num; j++) {
//             if (num % j == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime && num > 1) {
//             primes.push(num);
//         }
//     }
//     return primes;
// })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15]);

// console.log(primes);


//Arrow:-
// var pm = arr => {
//     var primes = [];  
    
//     for (var i = 0; i < arr.length; i++) 
//     {
//         var num = arr[i];
//         var isPrime = true;  
//         for (var j = 2; j < num; j++) 
//         {
//             if (num % j == 0) 
//             {
//                 isPrime = false; 
//                 break;  
//             }
//         }
//         if (isPrime && num > 1) 
//         {
//             primes.push(num);
//         }
//     }
//     return primes;  
    
// }
// console.log(pm([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

//Q5.Return all the prime numbers in an array

//Anonymous Function:
// var a = function(arr) {
//     function b(str) {
//         var c = str.split('').reverse().join('');
//         return str === c;
//     }

//     var d = []; 
//     for (var i = 0; i < arr.length; i++) {
//         if (b(arr[i].toString())) {
//             d.push(arr[i]);
//         }
//     }
//     return d;
// };
// console.log(a(["hello","madam", "john","bike", "peep", "level", 171, 12321]));

//IIFE:
// var c = (function(arr) {
//     function b(str) {
//         var a = str.split('').reverse().join('');
//         return str === a;
//     }

//     var d = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (b(arr[i].toString())) {
//             d.push(arr[i]);
//         }
//     }
//     return d;
// })(["iife","hello","madam", "john","bike", "peep", "level", 171, 12321]);
// console.log(c);

//Arrow
// var a = arr => {
//     const b = str => str === str.split('').reverse().join('');
//     var d = [];
//     for (var c of arr) {
//         if (b(c.toString())) {
//             d.push(c);
//         }
//     }
//     return d;
// };
// console.log(a(["Arrow","hello","madam", "john","bike", "peep", "level", 171, 12321]));


//Q6.Return median of two sorted arrays of the same size.

//Anonymous Function:
// function median(a, b) 
// {
//     let c = a[a.length - 1];
//     let d = b[0];
//     return (c + d) / 2;
// }
// let a = [1,3,5,7];
// let b = [7,9,11,13];
// console.log(median(a, b));  


//IIFE
// let a = [1,3,5,7,9];
// let b = [7,9,11,13,15];
// let result = (function(c, d) 
// {
//     let e = c[c.length - 1];
//     let f = d[0];
//     return (e + f) / 2;
// })(a, b);

// console.log(result);  

//Q7.Remove duplicates from an array

//Anonymous Function:
// function rD(a) {
//     let b = []; 
//     for(let i = 0; i < a.length; i++) {
//         if(b.indexOf(a[i]) === -1) {
//             b.push(a[i]);
//         }
//     }
//     return b;
// }

// let a = [1, 2, 2, 3, 4, 4, 5];
// console.log(rD(a)); 


//IIFE 
// let a = [1, 2, 2, 3, 4, 4, 5,6,6,9,9];
// let b = (function(c) 
// {
//     let d = []; 
//     for(let e = 0; e < c.length; e++) {
//         if(d.indexOf(c[e]) === -1) {
//             d.push(c[e]);
//         }
//     }

//     return d;
// })(a);

// console.log(b);

//Q8.Rotate an array by k times

//Anonymous Function:
// let rota = function(a, b) 
// {
//     b = b % a.length; 
//     let c = [];
//     for(let i = 0; i < a.length; i++) {
//         c[(i + b) % a.length] = a[i];
//     }
//     return c;
// };

// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = 3;

// console.log(rota(a, b)); 

//IIFE
let a = [1, 2, 3, 4, 5, 6, 7];
let b = 4;

let result = (function(a, b) 
{
    b = b % a.length;  
    let c = [];
    for(let i = 0; i < a.length; i++) {
        c[(i + b) % a.length] = a[i];
    }
    return c;
})(a, b);

console.log(result); 

