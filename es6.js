// let demo = {
//     name: 'Sharad'
// };

// let demo2 = {...demo};

/* demo ->   <- demo2 */
 
// demo.name = 'dummy';
// console.log(demo2);

/* spread operator -> ... */

// let obj = {
//     age: 20
//     name: 'dummy'
// }

// const obj2 = {...obj}; 


// let arr = [2, 7, 9];

// let brr = [...arr];


/* Arrow Function */
// //1
// function func() {

// }

// //2
// var func = function() {

// }

// //3
// let func = function() {

// }

// //4
// let func = (name) => {
//     return name;
// }

// //5
// let func = name => {
//     return name;
// }

// //6 
// let func = name => name

// Classes
class Human {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name);
    }
}

let m1 = new Human('Namit');
let m2 = new Human('Raj');

m1.printName();
m2.printName();