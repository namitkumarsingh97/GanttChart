// DOCUMENTATION OF JAVASCRIPT

/**** DATA TYPES IN JAVASCRIPT ****/

// var myName = "Namit Singh";
// console.log(myName);
// console.log(typeof myName); //this will tell the datatype of myName

// var myAge = 24;
// console.log(myAge);
// console.log(typeof(myAge));                  //this will tell the datatype of myAge

// var iAmNamit = true;
// console.log(iAmNamit);
// console.log(typeof iAmNamit); //this will tell the datatype of iAmNamit

// console.log(10 + "20");
// console.log(9 - "5"); //bug
// console.log("Java" + " " + "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("namit" - "kumar"); //NaN - Not a Number
// console.log(true + true); // true = 1; false = 0; // 1 + 1
// console.log(true + false); // 1 + 0
// console.log(false + false); // 0 + 0
// console.log(false - true); // 0 - 1

// --INTERVIEW QUESTION 1-- //
// Difference between null vs undefined ?

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof iAmUseless); //bug no. 2 -> how null can ba a object.

// var iAmStandby; // undefined -> no value is assigned to var
// console.log(iAmStandby);
// console.log(iAmStandb);
// console.log(typeof iAmStandby);

// --INTERVIEW QUESTION 2-- //
// What is NaN ?

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is not a number.
// NaN stands for Not a Number - when we subtract one string from another it gives NaN.

// var myPhoneNumber = 7838266990;
// var myName = "Namit SIngh";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)) {
//   console.log("Please Enter valid Number");
// } else {
//   console.log(myName);
// }

// var shoaib = 5;
// var namit = "5";

// shoaib == namit
// shoaib === namit

// #Challenge Practise Questions //

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

// ARITHMETIC EXPRESSIONS AND OPERATORS IN JAVASCRIPT :--

// console.log(5+10);              /** Here 5 and 10 -> operand, + is a operator. Expression is a combination of operand and operator. **/

// 1. Assignment Operators
// 2. Arithmetic Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. String Operators
// 6. Conditional (ternary) Operators

// 1. Assignment operators
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignment operator is equal (=)

// var x = 5;
// var y = 5;

// console.log("Is both the x and y are equal or not" + x == y); //here + operator is used for concatenation
// console.log(x == y);

// console.log(`Is both the x and y are equal : ${x == y}`);

// 2. Arithmetic Operators
// An arithmetic operator takes numeric values
// (either literals or variables) as their operands and
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 81%8);

// Increment and decrement operator

// Operator: x++ or ++x or x-- or --x

// If used postfix, with operator after operand (eg. x++)
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);

// If used postfix, with operator after operand (eg. x--)
// the decrement operator decrements and returns the value before decrementing.

// var num = 15;
// var newNum = num--;
// console.log(num);
// console.log(newNum);

// If used prefix, with operator before operand (eg. ++x)
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = ++num;
// console.log(num);
// console.log(newNum);

// If used prefix, with operator before operand (eg. --x)
// the decrement operator decrements and returns the value after decrementing.

// var num = 15;
// var newNum = --num;
// console.log(num);
// console.log(newNum);

// 3. Comparison Operators
// A comparision operator compares its operands and returns
// a logical value based on whether the comparision is true.

// var a = 30;
// var b = 10;

/* Equal (==) */
// console.log(a == b);

/* Not Equal ( != ) */
// console.log(a  !=  b);

// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);

// 4. Logical Operators
// Logical operators are typically used with Boolean (logical) values;
// when they are, the return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The Logical AND (&&) operator (logical conjunction) for a set Of
// operands is true if and only if all of its operands are true.

// console.log(a > b && b > 0);

// Logical OR (||)
// The Logical OR (||) operator (logical disjunction) for a set Of
// operands is true if and only if one or more of its operands is true.

// console.log((a > b) || (b > -50) || (b < 0));

// Logical NOT (!)
// The Logical NOT (!) operator (logical complement, negation)
// takes truth to falsity and vice versa.

// console.log(!(a > 0 || b < 0));
// console.log(!(false));

// 5. String Concatenation Operators
// The concatenation operator (+) concatenates two string values together,
// returning another string that is the union of the two operand Strings.

// console.log("namit " + "singh");

// ---------------------------------------------------------------------------

// #Challenge Practise Questions //
// Ques1:
// console.log(3 ** 3);

// Ques2:
// console.log(9 ** 2); // it means 9 power 2.

// Ques3:
// console.log(3 + "namit");

// Ques4:
// var a = 4;
// var b = 8;
// var c = 0;

// c = a; // c=4, a=8, b=0
// a = b;
// b = c;

// console.log("The value of a is: " + a);
// console.log("The value of b is: " + b);

// Ques5:
// var a = 4;
// var b = 8;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("The value of a is: " + a);
// console.log("The value of b is: " + b);

// ---------------------------------------------------------------------------

// --INTERVIEW QUESTION 3-- //
// Ques: What is the difference between == vs === ?

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2); // it only checks the value.
// console.log(num1 === num2); // it checks value as well as data type of that value.

// ---------------------------------------------------------------------------

/*  CONTROL STATEMENTS AND LOOPS  */

// If...Else

// var tommorow = "Not raining";

// if (tommorow == "raining") {
//   console.log("Wear Raincoat");
// } else {
//   console.log("Don't Wear Raincoat");
// }

// Nested Loop Excellent Example -> https://www.mathsisfun.com/leap-years.html

// var year = 2000;

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("Year " + year + " is a Leap Year");
//         }
//         else{
//             console.log("Year " + year + " is Not a Leap Year")
//         }
//     }
//     else{
//         console.log("Year " + year + " is a Leap Year");
//     }
// }
// else{
//     console.log("Year " + year + " is Not a Leap Year");
// }

// ---------------------------------------------------------------------------
// Ques: What is truthy and falsy values in Javascript ?
// we have total 5 falsy values in Javascript
// 0, "", undefined, null, NaN

// if ((score = 0)) {
//   console.log("OMG, We loss the game");
// } else {
//   console.log("Yay, We won the game");
// }

// ---------------------------------------------------------------------------

// Switch Statement

// ---------------------------------------------------------------------------

// While Loop

// var num = 0;
// block scope -> it means while loop first checks the condition of num then it will go inside curly braces.
// while(num <= 10) {
//     console.log(num);   // infinite loop
//     num++;
// }

// ---------------------------------------------------------------------------

// Do-While Loop

// in do-while, whatever is written in do will run 1 time and then it will go in while condition and check

// var num = 11;

// do{
//     console.log(num);   // infinite loop
//     num++;
// }
// while(num <= 10);

// ---------------------------------------------------------------------------

// using debugger

// var num = 11;
// debugger;
// do{
//     console.log(num);   // infinite loop
//     num++;
// }
// while(num <= 10);

// ---------------------------------------------------------------------------

// For Loop

// Syntax
// for(initializer; condition; iteration){
//     // code to be executed
// }

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

// ---------------------------------------------------------------------------
// #Challenge Practise Question //

//Print table of 8:

// for(var num = 1; num <= 10; num++){
//     var tableOf = 8;
//     console.log(num + " * " + tableOf + " = " + num*tableOf);
// }

// ---------------------------------------------------------------------------
// For in Loop
// ---------------------------------------------------------------------------
// For of Loop
// ---------------------------------------------------------------------------

// Conditional (ternary) operator -> It is the only operator that takes three operands.
// it is the shorter version of If...Else

// var age = 19;
// if(age >= 18){
//     console.log("Eligible to vote");
// }
// else{
//     console.log("Not eligible to vote");
// }

//variableName = (condition) ? value1:value2; // value1 = if true; value2 = if false.

// var age = 19;
// console.log((age >= 18) ? "Eligible to vote":"Not eligible to vote");

// ---------------------------------------------------------------------------

// ----- FUNCTIONS IN JAVASCRIPT -----

// A Javascript Function is a block of code designed to perform a particular task.

// * Function Definition
// * Calling a Function
// * Function Parameter
// * Function Arguments
// * Function expressions - create a function and put it into the variable.
// * Return Keyword
// * Anonymous Function

// Syntax:
// function functionName() {
//     statement;
// }

// Example:

// function sum(){
//     var num1 = 4, num2 = 6;
//     var total = num1 + num2;
//     console.log(total);
// }

// console.log(sum());

// #Challenge Practise Question //

// Ques: What is the difference between Function Parameter and Function Arguments ?
// Ans:
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

// function sum(num1, num2){       // num1 & num2 are function parameter.
//     var total = num1 + num2;
//     console.log(total);
// }

// sum();          // here, no arguments.
// sum(10,20);     // 10 & 20 are function arguments.
// sum(30,40);
// sum(-40,20);

// --INTERVIEW QUESTION 4-- //
// Ques: Why Functions ?

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, to produce diff. results.

// OR

// A Function is a group of reusable code which can be called anywhere in your program.
// This eliminates the need of writing the same code again and again.

// DRY ==> do not repeat yourself

// 4. Function Expression

// function sum(num1, num2){
//     var total = num1 + num2;
//     console.log(total);
// }

// var funExp = sum(5,15);

// 5. Return Keyword

// when Javascript reaches a return statement,
// the function will stop executing.
// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(num1, num2){
//     return total = num1+num2;
// }

// var funExp = sum(5,15);
// console.log(funExp);

// 6. Anonymous Function

// A function expression is similar to and has the same syntax as a function declaration One can define "named"
// function expressions (where the name of the expression might be used in the call stack for example)
// or "anonymous" function expressions.

// var funExp = function(num1, num2){      // anonymous function -> because this function has no name.
//     return total = num1+num2;
// }

// var sum = funExp(20,5);         // function calling
// console.log(sum);

// ---------------------------------------------------------------------------

// ECMAScript (Modern Javascript)

// 1. HISTORY

// a. 1996 - Javascript was created.
// b. 1997 - ECMA INTERNATIONAL - It was then submitted to ECMA International for standardization. which results in ECMAScript.
// c. 2015 - ES6 / ECMAScript 6 - Decided to switch to annual releases of ECMAScript.

// 2. TIMELINE

// a. 2015 - ES6
// b. 2016 - ES7
// c. 2017 - ES8
// d. 2018 - ES9
// e. 2019 - ES10
// f. 2020 - ES11
// g. 2021 - ES12

// 3. SERVICES

// a. LET AND CONST
// b. TEMPLATE STRINGS
// c. DAFAULT ARGUMENTS
// d. DESTRUCTURING
// e. OBJECT PROPERTIES
// f. ARROW FUNCTION
// g. REST OPERATORS
// h. SPREAD OPERATORS

// ---------------------------------------------------------------------------
// Now Its Time For Modern Javascript

// 🙏 🙏 Features Of ECMAScript 2015 Also Known As ES6 🙏 🙏

// 1. LET VS CONST VS VAR

// var myName = "Namit Kumar Singh";
// console.log(myName);
// myName = "Namit Singh";
// console.log(myName);

// let myName = "Namit Kumar Singh";
// console.log(myName);
// myName = "Namit Singh";
// console.log(myName);

// const myName = "Namit Kumar Singh";
// console.log(myName);
// myName = "Namit Singh";
// console.log(myName);

// var => Function scope
// let and const = Block scope

// ****************

// function biodata(){
//     var myFirstName = "Namit";
//     console.log(myFirstName);

// if(true){
//     var myLastName = "Singh";
//     console.log('inner ' + myLastName);
//     console.log('inner ' + myFirstName);
// }

//  console.log('innerOuter ' + myLastName);
// }
// biodata();

// ****************

// function biodata(){
//     let myFirstName = "Namit";
//     console.log(myFirstName);

// if(true){
//     let myLastName = "Singh";
//     console.log('inner ' + myLastName);
//     console.log('inner ' + myFirstName);
// }

//  console.log('innerOuter ' + myLastName);
// }
// biodata();

// ****************
// 2. TEMPLATE LITERALS (TEMPLATE STRINGS)

// Javascript program to print table of 8:-

// Output: 8 * 1 = 8
//         8 * 2 = 16
//         8 * 3 = 24
//         .
//         .
//         8 * 10 = 80

// for(let num = 1; num <= 10; num++){
//     let tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + num*tableOf);
// }

// Now Using Template Literals :-

// for(let num = 1; num <= 10; num++){
//     let tableOf = 8;
//     // console.log(tableOf + " * " + num + " = " + num*tableOf);
//     console.log(  `${tableOf} * ${num} = ${num*tableOf}` );
// }

// 3. DAFAULT PARAMETERS

// Default function parameters allow named parameters to be initialized with default
// values if no value or undefined is passed.

// function mul(a, b) {
//     return a*b;
// }
// console.log(mul(3,5));

// function mul(a, b=5) {               // this is called default parameter where a will auto,atically take 3.
//     return a*b;
// }
// console.log(mul(3));

// function mul(a, b) {
//     return a*b;
// }
// console.log(mul(3));

// 6. FAT ARROW FUNCTION

// Normal way of writing function.

// console.log(sum());

// function sum() {
//     let a = 5; b = 6;
//     let sum = a + b;
//     return `${sum}`;
// }

// Now we will see how to convert it into FAT ARROW FUNCTION -
// FAT ARROW SYMBOL : ( => )
// First define the function, then call it; otherwise it'll not work.
// FAT ARROW SAYS agr ek line ka code hai toh koi jaroorat nhi hai return krne ki.

// const sum = () => `the sum of the 2 number is ${(a=5)+(b=6)}`;

// console.log(sum());

// ---------------------------------------------------------------------------

// ARRAYS IN JAVASCRIPT

// when we use var, we can only store one value at a time.
// when we feel like storing multiple values in one variable then instead of var,
// we will use an Array.
// In Javascript, we have an Array class, and arrays are the prototype of this class.
// In Javascript, we have one more feature that we can store any datatype value in a single variable.

// Example1:
// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Naveen', true, 1997];
// console.log(myFriends);

// here, the first element in array is known as -> Lower Index/ Lower Boundary. - 'Himanshu'
// &, the last element in array is known as -> Upper Index/ Upper Boundary. - 1997

// : WHAT WILL WE DO :

// Traversal of an Array
// Searching and filter in an Array
// How to Sort and Compare an Array
// How to Insert, Add, Replace, and Delete Elements in Array(CRUD)
// Map(), Reduce(), Filter()

// Example2:

/* var myFriends = new Array; */ // creating instance of an Array class since its predefined in JS.
// but this optional line if we are using square brackets and inserting array elements.

// 1. Traversal of an Array
// Navigation through an Array.

// If we want to get the  single data at a time and also if we want to change the data.

// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];
// console.log(myFriends[1]);
// console.log(myFriends[myFriends.length-1]);

// If we want to check the length of the elements in Array.

// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];
// console.log(myFriends.length); // Its a property in Array in JS

// we use for loop to navigate.
// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];

// for(var i=0; i<myFriends.length; i++) {
//     console.log(myFriends[i]);
// }

// After ES6 we have FOR IN and FOR OF loop too....... Lets see that -

// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];

// for (let elements in myFriends) {
//     console.log(elements);
// }

// so with the help of FOR IN Loop we get the index number of elements in Array.

// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];

// for (let elements of myFriends) {
//     console.log(elements);
// }

// so with the help of FOR OF Loop we get the data in Array.

// Array.prototype.forEach()
// Calls a function for each element in the Array.
// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];

// myFriends.forEach(function(element, index, array) {
//     console.log(element + " is preset at index " + index);
// });

// Now using Fat Arrow Function and forEach()

// var myFriends = ['Himanshu', 'Naveen', 'Vishal', 'Namit'];
// myFriends.forEach((element, index, array) => {
//     console.log(element + " is preset at index " + index);
// });

// TOPIC1: SEARCHING-AND-FILTERING-IN-ARRAY
// SOME PREDEFINED METHODS FOR IT :-

// * Array.prototype.indexOf()
// * Array.prototype.lastIndexOf()
// * Array.prototype.sort()
// * Array.prototype.push() -> It adds one or more elements to the end of an array & returns the new length of array.

// var animals = ['pig','goat','sheep'];   // try using const
// console.log("Length of the Array " + animals.length);
// const count = animals.push('dog','cat');
// console.log(animals);
// console.log("New Length of the Array " + count);

// * Array.prototype.unshift() -> It adds one or more elements to the start of an array & returns the new length of array.

// var animals = ['pig','goat','sheep'];
// animals.unshift('dog','cat');
// console.log(animals);

// * Array.prototype.pop() -> It removes the last element from the array

// var animals = ['pig','goat','sheep'];
// console.log(animals);
// console.log(animals.pop());
// console.log(animals);

// * Array.prototype.shift() -> It removes the first element from the array

// var animals = ['pig','goat','sheep'];
// console.log(animals);
// console.log(animals.shift());
// console.log(animals);

// ----------------------------------------------------------------------------------

// #Challenge Practise Question //

// Ques1: Sort the given Array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();       // sort() function sorts values as strings
// console.log(fruits);

// Ques2: Reverse the elements in an array

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();        // First sort the elements of fruits
// fruits.reverse();     // Then reverse the order of the elements
// console.log(fruits);

// Ques3: Sort a set of numbers

// var numbers = [40, 100, 1, 5, 25, 10];
// numbers.sort( function(a, b) {
//     return a - b
// });
// console.log(numbers);

// * Used compared function
// * The purpose of the compare function is to define an alternative sort order.
// * Compare function should return a negative, zero, or positive value, depending on the arguments:
// function(a, b){return a - b}

// Ques4:
// const months = ['Jan','march','April','June','July'];

// 1: Add Dec at the end of the array ?
// 2: What is the return value of splice method ?
// 3: update march to March (update) ?
// 4: Delete June from an array ?

// Array.prototype.splice(start: number, deleteCount?: number)  --> Add or remove element from array.

// Solution1:
// var months = ['Jan','march','April','June','July'];
// var newMonth = months.splice(months.length,0,"Dec");
// console.log(months);

// Solution2:
// var months = ['Jan','march','April','June','July'];
// var newMonth = months.splice(months.length,0,"Dec");
// console.log(newMonth);

// Solution3:
// method1:

// var months = ['Jan','march','April','June','July'];
// var newMonth = months.splice(1,1,"March");
// console.log(months);

// method2:

// var months = ['Jan','march','April','June','July'];
// var indexOfMonth = months.indexOf('march');
// if (indexOfMonth != -1) {
//     var updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// } else {
//     console.log('No such data found');
// }

// Solution4
// method1:

// var months = ['Jan','march','April','June','July'];
// var newMonth = months.splice(3,3);
// console.log(months);

// method2:
// var months = ['Jan','march','April','June','July'];
// var indexOfMonth = months.indexOf('June');
// if (indexOfMonth != -1) {
//     var updateMonth = months.splice(indexOfMonth,1);    // if we write here 2 inplace of 1 then it will delete both june and july
//     console.log(months);
// } else {
//     console.log('No such data found');
// }

// try using Infinity in place of 1 and check the result

// ----------------------------------------------------------------------------------

// #Challenge Practise Question //

// Ques1: Find the square root of each element in an array:
// let arr = [25, 36, 49, 64, 81];

// Ques2: Multiply each element by 2 and return only those elements which are greater than 10?
// let arr = [2, 3, 4, 6, 8];

// Solution1:

// ----------------------------------------------------------------------------------

// TOPIC4: MAP AND REDUCE METHOD

// Array.prototype.map()

// ----------------------------------------------------------------------------------

//  ==> 👉 DATE AND TIME IN JAVASCRIPT

// Date Methods (get and set)
// Time Methods (get and set)

// JavaScript date objects represent a single moment in time in a platform-independent format.
// Date objects contain a number that represents miliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date objects :-

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)  // it takes 7 arguments
// new Date(milliseconds) // we cannot avoid month section
// new Date(date string)

// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate); // India is 5 hours 30 min ahead of GMT - Greenwich Mean Time.

// console.log(new Date());
// console.log(new Date().toLocaleString());  // Now it will give exact date & time both.
// console.log(new Date().toLocaleDateString()); // it will only give date.
// console.log(new Date().toLocaleTimeString()); // it will only give time.
// console.log(new Date().toString()); // give date time in a good manner/ professional manner.

// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since
// January 1, 1970 00:00:00 UTC

//  console.log(Date.now()); // ye hme January 1, 1970 00:00:00 se lekr abtk ki milliseconds return krta hai

// new Date(year, month, ...) 🙋‍♂️
// 7 arguments specify - year, month, day, hours, minutes, seconds, milliseconds (all in order)
// Note: JavaScript counts months from 0 to 11.
// January is 0; December is 11.
// Its important to give atleast month argument.

// var myBirthCalender = new Date(1997, 2, 1, 16, 30, 16, 0);
// console.log(myBirthCalender.toString());
// console.log(myBirthCalender.toLocaleString());

// new Date(date string) 🙋‍♂️
// It creates a new date object from a date string.

// var newDate = new Date("October 23, 2020 01:05:00");
// console.log(newDate.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// It creates a new date object as zero time plus milliseconds

// var newDate = new Date(1634931630602); // ==> we got this todays milliseconds through  line 920 - Date.now()
// console.log(newDate.toLocaleString());

// 👉 Date Methods

// const currDate = new Date();

// // how to get the individual date :
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());  // 0-11 January to December
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// // how to set the individual date :
// console.log(currDate.setFullYear(1996));
// console.log(currDate.setMonth(11));
// console.log(currDate.setDate(13));
// console.log(currDate.toLocaleString());

// 👉 Time Methods

// const currTime = new Date();

// how to get the individual time :-
// console.log(currTime.getTime()); // => it returns the no. of millisec. since 1 January, 1970
// console.log(currTime.getHours()); // => it returns the hours of a date as a number (0-23)
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// // how to set the individual time :
// console.log(currTime.setHours(10));
// console.log(currTime.setMinutes(22));
// console.log(currTime.setSeconds(2));
// console.log(currTime.setMilliseconds(1));

// ⌚ #Challenge Practise Question //

// 1. new Date().toLocaleTimeString();

// var a = new Date().toLocaleTimeString();
// console.log(a);

// 2. new Date().toLocaleDateString();

// var b = new Date().toLocaleDateString();
// console.log(b);

// 3. new Date().toLocaleString();

// var c = new Date().toLocaleString();
// console.log(c);

// ----------------------------------------------------------------------------------

//  ==> 👉 JAVASCRIPT MATH OBJECT

// The JavaScript Math Object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️

// Math.round() 🙋‍♂️
// returns the value of x rounded to its nearest integer.

// console.log(Math.round(2.1));

// Math.pow() 🙋‍♂️
// Math.pow(x, y) returns the value of x to the nearest power of y.

// console.log(Math.pow(2, 4));

// let num1 = 2, num2 = 4;
// console.log(Math.pow(num1, num2));

// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x.

// console.log(Math.sqrt(5));
// console.log(Math.sqrt(24));
// console.log(Math.sqrt(52));

// Math.abs() 🙋‍♂️
// Math.abs() returns the absolute (positive) value of x.

// console.log(Math.abs(-3));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-10));

// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer.

// console.log(Math.ceil(4.4));
// console.log(Math.ceil(99.1));

// Math.floor() 🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer.

// console.log(Math.floor(4.4));
// console.log(Math.floor(99.1));

// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments.

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments.

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() 🙋‍♂️
// Math.random() returns the random number between 0 (inclusive) and 1 (exclusive).

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));  // 0 to 9

// Math.trunc() 🙋‍♂️
// The Math.trunc() method returns the integer part of a number.

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// ⌚ #Challenge Practise Question //

// If the argument is a positive number, Math.trunc() is equivalent to Math.floor()
// otherwise, Math.trunc() is equivalent to Math.ceil()

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 DOM IN JAVASCRIPT  (DOCUMENT OBJECT MODEL)

// 1️⃣ window is the main container or we can say the global object and any operations related to entire
// browser window can be a part of window object.

// Eg. the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object.

// 2️⃣ All the members like objects, methods or properties.
// If they are the part of window Object then we do not refer the window object.
// Since window is the global object so you donot have to write down window.

// 3️⃣ Window has methods, properties and object.
// Eg. setTimeout() or setInterval() are the methods.
// whereas Document is the object of the Window and It also has a screen object with properties describing the physical display.

// Now, I have a doubt like we have seen the methods and object of the global object that is window.
// But what about the properties of the Window Object ?

// so example of window object properties are
// innerHeight,
// innerWidth and there are many more

// DOM - document, html part - (body, a, p , head)
// BOM (Browser Object Model) - navigator, screen, location, frames, history, XMLHttpRequest etc...

// *************************************  DOM vs BOM  **************************************

// 👉 The DOM is the Document Object Model, which deals with the document, the HTML elements themselves.
//  e.g. document and all traversal you would do in it, events, etc.

// For Eg:
// change the background color to red.
// document.body.style.background = "red";

// 👉 The BOM is the Browser Object Model, which deals with browser components, aside from the document.
// Eg. history, location, navigator and screen.
// (as well as some others that vary by browser). OR
// In simple meaning all the Window operations which comes under BOM are performed using BOM.

// Let's see some practical on History object

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user.

// alert(location.href);   // shows current URL
// if (confirm("Want to Meet Namit Kumar Singh ?")) {
//     location.href = "https://alwaysjudgeabookbyitscover.com/";   // will redirect you to the URL
// }

// window.history.back();       // will redirect you to the previous page

// Section 3️⃣: Navigate through the DOM

// 1. document.documentElement - returns the Element that is the root element of the document.
// 2. document.head
// 3. document.body
// 4. document.body.childNodes - (include tab, enter and whiteSpace)
// list of the direct children only
// 5. document.children - (without text nodes, only regular Elements)
// 6. document.childNodes.length

//  ==> 👉 Practice Time <==  //

// Ques1. How to check whether an element has child nodes or not ?
// Solution: we will use hasChildNodes()

// Ques2. How to find the child in DOM Tree ?

// Solution:
// document.firstChild vs document.firstElementChild
// document.lastChild vs document.lastElementChild
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild

// 👉 HOW TO FIND OR ACCESS THE SIBLINGS

// document.body.nextSibling
// document.body.previousSibling
// document.body.nextElementSibling
// document.body.previousElementSibling

// Section 4️⃣: How to search the Elements and the References

// Finding HTML elements by id - document.getElementById("");
// Finding HTML elements by tag name - document.getElementsByTagName("");
// Finding HTML elements by class name - document.getElementsByClassName("");
// Finding HTML elements by CSS selectors - document.querySelectorAll("");
// Finding HTML elements by HTML object collections

// <script>
//     const changeContent = () => {
//         document.getElementById('Heading').innerHTML = "Namit Singh is Back";
//     }
// </script>

// 👉 --INTERVIEW QUESTION 1-- //

// Ques: Whats the difference between getElementById and querySelector ?
// Ans:

// <!-- What is getElementById --!>
// Syntax:
// element = document.getElementById(id);

// Returns a reference to the element by its ID.
// If the element with the specified ID is not in the document, it will return null.

// <!-- What is querySelector --!>
// Syntax:
// element = document.querySelector(selectors);

// Returns the first element within the document that matches the specified group of selectors,
// or null if no matches are found.

// <!-- For Example 👇 -->

// <!-- getElementById vs querySelector: similarities -->

// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset='utf-8'>
//     <meta http-equiv='X-UA-Compatible' content='IE=edge'>
//     <title>Document</title>
// </head>
// <body>
//     <ul>
//         <li id="web-id">PHP</li>
//         <li>HTML</li>
//         <li class="web-class">CSS</li>
//         <li class="web-class">JavaScript</li>
//     </ul>
// <script>
//     console.log( document.getElementById('web-id').innerHTML);
//     console.log( document.querySelector('#web-id').innerHTML);
// </script>
// </body>
// </html>

// <!-- getElementById vs querySelector: difference -->

// 👉 What if you want to get the HTML content of the third li ?

// You will not be able to use getElementById because there is no id associated with it.
// But you can do with querySelector.

// There are 3 ways to do so:
// 1. console.log( document.querySelector('ul li.web-class').innerHTML);
// 2. console.log( document.querySelector('li.web-class').innerHTML);
// 3. console.log( document.querySelector('.web-class').innerHTML);

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 EVENTS IN JAVASCRIPT

// Topics that we will see:
// 1. 4 ways of writing Events in JavaScript
// 2. What is Event Object ?
// 3. MouseEvent in JavaScript
// 4. KeyboardEvent in JavaScript
// 5. InputEvent in JavaScript

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// 🙋‍♂️ HTML events
// An HTML event can be something the browser does, or something a user does.

// Here are some example of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a function (we already seen and most commom way of writing)
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)
// const fourthWay = document.querySelector('#fourthWay');
// fourthWay.addEventListener(type: K, listener: (this: Element, ev: ElementEventMap[K]) =>
// any, options?: boolean | AddEventListenerOptions): void (+1 overload)

// fourthWay.addEventListener('click', () => {
//     alert('I love this way of writing');
// })

// Callback => ek function ke under doosre function ko as an argument pass krwane ko callback
// function kehte hain.

// check the Events HTML file

// section 2️⃣: What is Event Object?
// Event Object is the parent object of the event object.
// For Example:
// MouseEvent, FocusEvent, KeyboardEvent etc.

// section 3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML document belongs to the MouseEvent Object.
// onmousedown="mouseDown()", onmouseup="mouseUp(), mouseenter, mouseleave;

// section 4️⃣: KeyboardEvent in JavaScript
// Events that occur when user presses a key on the keyboard,
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
// onkeypress, onkeydown, onkeyup;

// section 5️⃣: InputEvents in JavaScript
// The onchange event occurs when the value of an element has been changed.

// For radioButtons and checkboxes, the onchange event occurs when the checked state has been changed.

// 👉 --INTERVIEW QUESTION -- //

// Ques: Difference between onclick and addEventListener ?

// Ans:  The addEventListener() method attaches an event handler to the specified element while
// The onclick event attribute works when the user clicks on the button. When the mouse is clicked
// on the element then the script runs.

// addEventListener() does not overwrite existing event handlers,
// whereas onclick overrides any existing onclick function event handlers.

// Syntax:
// element.addEventListener(event, listener, useCapture);
// object.onclick = function(){myScript};

// Example:

// <!DOCTYPE html>
// <html>

// <body>
// 	<button id="btn">Click here</button>
// 	<h1 id="text1"></h1>
// 	<h1 id="text2"></h1>

// 	<script>
// 		let btn_element = document.getElementById("btn");

// 		btn_element.addEventListener("click", () => {
// 			document.getElementById("text1")
// 				.innerHTML = "Task 1 is performed";
// 		})

// 		btn_element.addEventListener("click", () => {
// 			document.getElementById("text2")
// 				.innerHTML = "Task 2 is performed";
// 		});
// 	</script>
// </body>

// </html>

// <!DOCTYPE html>
// <html>

// <body>
// 	<button id="btn">Click here</button>
// 	<h1 id="text1"></h1>
// 	<h1 id="text2"></h1>

// 	<script>
// 		let btn_element = document.getElementById("btn");

// 		btn_element.onclick = () => {
// 			document.getElementById("text1")
// 				.innerHTML = "Task 1 is performed";
// 		};

// 		btn_element.onclick = () => {
// 			document.getElementById("text2")
// 				.innerHTML = "Task 2 is performed";
// 		};
// 	</script>
// </body>

// </html>

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 TIMING BASED EVENTS IN JAVASCRIPT

// The window object allows execution of code at specified time intervals.
// These time intervals are called timing based events.
// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// same as setTimeout(), but repeats the execution of the function continuously.

// 1️⃣ setTimeout( () => {
//     }, timeout);

// 2️⃣ setInterval( () => {
//     }, interval);

// 3️⃣ clearTimeout()

// 4️⃣ clearInterval()

// 👉 --INTERVIEW QUESTION -- //

// Ques: Difference between setTimeout() and setInterval() ?
// Ans: given above.

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 OOPS IN JAVASCRIPT

// 1️⃣ What is Object Literals ?

// Object literal is simply a key:value pair data structure.
// Storing variables and functions together in one container, we can refer this as an objects.

// Object is like our school bag jiske under hum saara samaan rkh skte hain - books, copies, lunch box,
// pencil box etc.

// 🙋‍♂️ How to create an object ?

// 1st way

// let objectName = {
//     key : value,
//     key : value,
//     key : function() {
//         console.log();
//     }
// }

// let bioData = {
//     myName : "Namit Kumar Singh",
//     myAge : 22,
//     getData : function() {
//         console.log(`My name is ${bioData.myName} and I am ${bioData.myAge} years old.`);
//     }
// }

// console.log(bioData.myName);
// console.log(bioData.getData());

// in oop's calling a function inside object is known as method.

// 2nd way - no need to write functions as well after ES6

// let bioData = {
//     myName : "Namit Kumar Singh",
//     myAge : 22,
//     getData () {
//         console.log(`My name is ${bioData.myName} and I am ${bioData.myAge} years old.`);
//     }
// }

// bioData.getData();

// 👉 What if we want object as a value inside an object

// let bioData = {
//     myName : {
//         instaName : "Samrat Namit Singh",
//         officialName : "Namit Kumar Singh",
//         petName : "Manu"
//     },
//     myAge : 22,
//     getData () {
//         console.log(`My name is ${bioData.myName} and I am ${bioData.myAge} years old.`);
//     }
// }

// console.log(bioData.myName.petName);

// 2️⃣ What is "this" objects ?

// The definition of "this" object is that it contains the current context.
// The "this" object can have different values depending on where it is placed.

// 🙋‍♂️Example-1:
// console.log(this);
// it refers to the current context and that is window global object.

// 🙋‍♂️Example-2:
// function myName() {
//     console.log(this);
// }
// myName();

// 🙋‍♂️Example-3:
// var myNames = 'namit';
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// 🙋‍♂️Example-4:
// const obj = {
//         myAge : 22,
//         myName() {
//             console.log(this);
//             console.log(this.myAge);
//         }
// }
// obj.myName();

// 🙋‍♂️Example-5:
// this object will not work with arrow function.

// 👉 --INTERVIEW QUESTION -- //

// Ques1: What will be the output of

// const obj = {
//     myAge : 26,
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();

// Ans: {} -> window object

// Ques2: What will be the output of

// let bioData = {
//     myName : {
//         realName : "Bhuvan Bam",
//         channelName : "BB Ki Vines"
//     },
//     // things to remember is that the myName is the key and the object is act like a value.
//     myAge : 26,
//     getData() {
//         console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
// }

// bioData.getData();

// call method is used to call the method of another object.

// 4️⃣ Destructuring in ES6/2015
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
// from arrays, or properties from objects, into distinct variables.

// ➡️ Array Destructuring 🏁

// const myBioData = ['namit','kumar',22];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
// console.log(myAge);

// now using array destructuring

// const myBioData = ['namit','kumar',22];

// let [myFName, myLName, myAge] = myBioData;
// console.log(myFName);

// we can add values too

// const myBioData = ['namit','kumar',22];

// let [myFName, myLName, myAge, myDegree="B.Tech"] = myBioData;
// console.log(myDegree);

// ➡️ Object Destructuring 🏁

// const myBioData = {
//     myFName : 'namit',
//     myLName : 'singh',
//     age : 22
// }

// let age = myBioData.age;
// console.log(age);

// now using array destructuring

// const myBioData = {
//     myFName : 'namit',
//     myLName : 'singh',
//     age : 22
// }

// let {myFName, myLName, Age, myDegree="B.Tech"} = myBioData;             // we have used curly braces here for objects.
// console.log(myBioData);
// console.log(myFName);

// 5️⃣ Object Properties

// ➡️ we can now use Dynamic Properties

// let myName = "Namit";
// const myBio = {
//     [myName] : "Hello! How are you ?",
//     22 : "is my age"
// }
// console.log(myBio);

// ➡️ no need to write key and value, if both are same.

// 1.

// let myName = "Namit Kumar Singh";
// let myAge = 22;

// const bioData = {
//     myName : myName,
//     myAge : myAge
// }

// console.log(bioData);

// 2.

// let myName = "Namit Kumar Singh";
// let myAge = 22;

// const bioData = {myName, myAge}

// console.log(bioData);

// 6️⃣ Fat Arrow Function

// 👻 Normal Way of writing Function

// console.log(sum());

// function sum() {
//     let a = 5, b = 6;
//     let sum = a + b;
//     return `the sum of the 2 number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum());

// 7️⃣ Spread Operator

// const colors = ['red','yellow','black','white','green'];

// const myColors = ['red','yellow','black','white','green','pink','blue'];
// // 2nd time add one more color on top and tell we need to write it again
// // on myColor array too

// const myFavouriteColors = ['pink','blue', ...colors];
// console.log(myFavouriteColors);

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ECMAScript 2016/ES7

// 🙋‍♂️ ES7 Features :-

// 1. Array.prototype.includes

// const colors = ['red','yellow','black','white','green'];
// const isPresent = colors.includes('yellow');
// const isPresentThis = colors.includes('grey');
// console.log(isPresent);
// console.log(isPresentThis);

// 2. Exponentiation Operator (**) - power

// console.log(2**5);          // 2 Power 5

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ECMAScript 2017/ES8

// 🙋‍♂️ ES8 Features :-

// 1. String Padding -> padStart, padEnd (gives space start and end of string)

// let name = "namit";
// let myName = "namit".padStart(5);
// console.log(myName);

// 2. Object.values()

// const person = { name: 'Fred', age: 27 }
// console.log(Object.values(person));
// console.log(Object.entries(person));

// 3. Object.entries()

// const person = { name: 'Fred', age: 27 }
// console.log(Object.entries(person));

// 4. Object.getOwnPropertyDescriptors()

// const person = { name: 'Fred', age: 27}
// console.log(Object.getOwnPropertyDescriptors(person));

// 5. Trailing commas in function parameter lists and calls
// 6. Async functions
// 7. Shared memory and atomics

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ECMAScript 2018/ES9

// 🙋‍♂️ ES9 Features :- { https://flaviocopes.com/es2018/ }

// 1. Rest/Spread Properties
// 2. Asynchronous Iteration
// 3. promise.prototype.finally()
// 4. Regular Expression improvements
//     * RegExp lookbehind assertions: match a string depending on what precedes it
//     * Unicode property escapes \p(..) and \P(..)
//     * Named capturing groups
//     * The s flag for regular expressions

// ES2018 is the latest version of the ECMAScript standard.

// 1. Rest/Spread Properties

// const person = { name: 'Fred', age: 27, degree: "bsc" };
// const sPerson = {...person};

// console.log(person);
// console.log(sPerson);

// ES6 introduced the concept of a rest element when working with array destructuring:

// const numbers = [1, 2, 3, 4, 5]
// [first, second, ...others] = numbers

// and spread elements

// const numbers = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => a + b + c + d + e
// const sumOfNumbers = sum(...numbers)

// console.log(numbers);
// console.log(sumOfNumbers);

// ES2018 introduces the same but for objects.

// Rest Properties:

// const {first, second, ...others} = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }

// first   // 1
// second  // 2
// others  // { third: 3, fourth: 4, fifth: 5 }

// Spread properties allow to create a new object by combining the properties of the object passed after
// the spread operator:

// const items = { first, second, ...others }
// items   // { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ECMAScript 2019/ES10

// 🙋‍♂️ ES10 Features :- { https://flaviocopes.com/es2019/ }

// 1. Array.prototype.{flat,flatMap}
// 2. Optional catch binding
// 3. Object.fromEntries()
// 4. String.prototype.{trimStart,trimEnd}
// 5. Symbol.prototype.description
// 6. JSON improvements
// 7. Well-formed JSON.stringify()
// 8. function.prototype.toString()

// 1. Array.prototype.{flat,flatMap}

// How to flatten an array
// converting 2d and 3d array into one dimensional array.

// const arr = [
//         ['zone 1', 'zone 2'],
//         ['zone 3', 'zone 4'],
//         ['zone 5', 'zone 6'],
//         ['zone 7', ['zone 7', 'zone 8']],
//     ];

// let flatArr = arr.reduce((accum, currVal) => {
//         return accum.concat(currVal);
// })
// console.log(flatArr);

// now using flat method :

// const arr = [
//         ['zone 1', 'zone 2'],
//         ['zone 3', 'zone 4'],
//         ['zone 5', 'zone 6'],
//         ['zone 7', ['zone 7', 'zone 8']],
//     ];

// console.log(arr.flat(Infinity));

// 3. Object.fromEntries()

// const person = { name: 'Fred', age: 27 }
// console.log(Object.entries(person));
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(arrObj));

// 4. String.prototype.{trimStart,trimEnd}

// It is used to remove the space that we had created using String Padding -> padStart, padEnd

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ECMAScript 2020/ES11

// 🙋‍♂️ ES11 Features :- { https://flaviocopes.com/es2020/ }

// 1. BigInt

// For calculation of very big integer values.
// just put 'n' at the end.

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);
// console.log(oldNum + 12);       // giving wrong answer: correct answer => 9007199254741003

// console.log(9007199254740991n + 12n);    // now answer is coming correct
// console.log(typeof(9007199254740991n + 12n));

// 2. Nullish Coalescing

// Nullish Coalescing adds the ability to truely check nullish values instead of falsey values.

// In JavaScript, lot of values are falsey, like empty strings, the number 0, undefined, null, false, NaN.

// However, a lot of times you might want to check if a variable is nullish - that is if it is
// either undefined or null, like when it is okay for a variable to have an empty string, or
// even a false value.

// In that case, we will use the new nullish coalescing operator (??)

// const nullValue = null;
// const emptyText = ""; // falsy
// const someNumber = 42;

// const valA = nullValue ?? "default for A";
// const valB = emptyText ?? "default for B";
// const valC = someNumber ?? 0;

// console.log(valA); // "default for A"
// console.log(valB); // "" (as the empty string is not null or undefined)
// console.log(valC); // 42

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 ADVANCED JAVASCRIPT

// 🙋‍♂️ What we will see :-

// 1. Event Propagation (Event Bubbling and Event Capturing)
// 2. Higher Order Function
// 3. Callback Function
// 4. Function Currying (We will see after Async JS section)
// 5. Callback Hell
// 6. AJAX call using XMLHttpRequest
// 7. JSON
// 8. Fetch API (Application Programming Interface)
// 9. Promises
// 10. Async-Await
// 11. Error Handling in JS

// ....................... //

// 1️⃣ Event Propagation (Event Bubbling and Event Capturing)

// The Event Propagation mode determines in which order the elements receive the event.

// bubble phase -> bottom to top (from child to parent)  => target phase to the event propagation
// Capture phase -> top to bottom (from parent to child) => event propagation to target phase

// Example: 👇

//                             The Event Propagation

//                                    window
//                                    document
//                                    <html>
//                                    <body>
//                                    <div>
//                                    <button>

//                                  target phase

// The event propagation mode determines in which order the elements receive the event. With bubbling,
// the event is first captured and handled by the innermost element and then propagated to outer elements.
// With capturing, the event is first captured by the outermost element and propagated to the inner elements.

// Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event
// occurs in an element inside another element, and both elements have registered a handle for that
// event.

// The Event Prpagation mode determines in which order the elements recieves the event.

// 🙋‍♂️ PROPAGATION IS BROADLY CATEGORIZED INTO 3 MAIN TYPES :-

// THE CAPTURE PHASE = Going from the window to the event target phase.
// THE TARGET PHASE = It is the target phase.
// THE BUBBLE PHASE = From the event target parent back to the window.

// 🙋‍♂️ WHAT IS EVENT BUBBLING ?

// With Event Bubbling, the event is first captured and handled by the innermost element and then
// propagated to outer elements.

// 🙋‍♂️ WHAT IS EVENT CAPTURING ?

// With Event Capturing, the event is first captured by the outermost element and propagated to the
// inner elements.
// Capturing is also called ""trickling", which helps remember the propagation order.

// 2️⃣: Higher Order Function
// Function which takes another function as an arguments is called Higher Order Function.

// 3️⃣: Callback Function
// Function which gets passed as an argument to another function is called as Callback Function.
// A callback function is a function that is passed as an argument to another function, to be "call back"
// at a later time.

// Example: 👇

// const add = (a,b) => {
//     return a+b;
// }

// const sub = (a,b) => {
//     return Math.abs(a,b);
// }

// const mul = (a,b) => {
//     return a*b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }
// console.log(calculator(5, 4, add));

// here, calculator() is a Higher Order function and add(), sub(), mul() is a Callback function.

//  ==> 👉 HOW JAVASCRIPT WORKS AND ASYNCHRONOUS JAVASCRIPT

// 🙋‍♂️ What we will see :-

// 1. Hoisting in JavaScript
// 2. Scope Chain
// 3. Lexical Scoping in JavaScript
// 4. Use Strict Mode
// 5. This Keyword
// 6. Closures in JavaScript
// 7. What is Asynchronous JavaScript Programming?
// 8. What is Event Loop?

// 1️⃣ Hoisting in JavaScript
// we have a creation phase and execution phase.

// Hoisting in JavaScript is a mechanism where variables and functions declarations are moved to the
// top of their scope before the code execute.

// Example: 👇
// console.log(myName);
// var myName;
// myName = "Namit";

// Output Here: undefined since we have not defined the value of myName before execution.

// How the above code is working:

// 1. var myName = undefined;    // since we haven't defined any value so bydefault it will take undefined.
// 2. console.log(myName);
// 3. myName = "Namit";

// 💯 In ES2015 (ES6), hoisting is avoided by using the let keyword instead of var. (The other difference
// is that variables declared with let are local to the surrounding block, not the entire function.)

// 2️⃣ What is Scope Chain and Lexical Scoping in JavaScript ?

// The Scope Chain is used to resolve the value of variable names in JS.

// Scope Chain in JS is lexically defined, which means that we can see what the scope chain will be,
// just by looking at the code.

// Example: const PI = 3.142;    By looking this code we can easily tell the value of PI. So, This is called lexically defined.

// At the top, we have the Global Scope, which is the window object in the browser.

// Lexical Scoping means Now, the inner function can get access to their parent functions variables
// But the vice versa is not true.

// Example: 👇

// let a = "Hello guys. ";         // global scope

// const first = () => {
//     let b = " How are you?"

//     const second = () => {
//         let c = " Hi, I'm fine thank you!"
//         // console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c);          // output saying c is not defined.
// }
// first();

// 3️⃣ What is Closures in JavaScript ? 🙂

// A Closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical environment).

// In other words, a closure gives you access to an outer function's scope from an inner function.

// In JavaScript, closures are created every time a function is created, at function creation time.

// Example: 👇

// const outerFunction = (a) => {
//     let b = 10;
//     const innerFunction = () => {
//         let sum = a + b;
//         console.log(`the sum of the 2 functions is ${sum}`);
//     }
//     innerFunction();
// }
// outerFunction(5);

// 4️⃣ Use Strict Mode

// It basically tells our mistake in code.

// "use strict"
// x = "Namit";     // it will not work because we havenot defined the data type of x.
// console.log(x);

// 👉 --INTERVIEW QUESTION -- //

// Ques: What is the difference between Asynchronous and Synchronous JavaScript ?

// Solution:

// Synchronous JavaScript Prog

// Synchronous JavaScript meaning agr aap koi 2 kaam ek saath kr rhe ho, to jabtk aapka pehla kaam khtm
// nhi ho jaata aap doosra kaam nhi kr skte. bhale hi 2nd waale kaam ka timing pehle waale se kam toh bhi
// jbtk pehla waala khtm nhi ho jaata aap doosra waala nhi kr skte.

// After AJAX vo Asynchronous bn gya.

// Example: 👇
// const fun2 = () => {
//     console.log(`function 2️ is called`);
// }

// const fun1 = () => {
//     console.log(`function 1 is called`);
//     fun2();
//     console.log(`function 1 is called again`);
// }

// fun1();

// Asynchronous JavaScript Prog

// aaj ke era mein we use Asynchronous JavaScript Prog, jo ye bolta hai saare kaam ek saath chlte rhenge,
// jo kam time ka hai vo jldi khtm ho jayega aur jo long time ka hai vo apna run krta rhega. to ab wait
// nhi krna pdega kisi kaam ke khtm hone ka jo hme Synchronous JavaScript mein krna pdta tha.

// Example: 👇
// const fun2 = () => {
//     setTimeout( () => {
//         console.log(`Function 2 is called`);
//     }, 2000);
// }

// const fun1 = () => {
//     console.log(`Function 1 is called`);
//     fun2();
//     console.log(`Function 1 is called again`);
// }

// fun1();

// 👻 What is Event Loop in JavaScript ?

// 1. EXECUTION STACK
// 2. WEB API'S
// 3. MESSAGE QUEUE

// Function jab bhi create hota hai, tb uska ek execution context bnta hai. and jab hum usko return krte
// hain tb vo wahan se gayab ho jaata hai.

// 👉 --INTERVIEW QUESTION -- //

// Ques: What will be the output of sum(5)(3)(8) ?
// Ans: To solve this we need the concept of function currying .

// 4️⃣ Function Currying️             // continuing line 1922

// Currying is a technique of evaluating function with multiple arguments, into sequence of function
// with single argument.

// In other words, when a function, instead of taking all arguments at one time, takes the first one
// and return a new function that takes the second one and returns a new function which takes the third
// one, and so fourth, untill all arguments have been fulfilled.

// mind it sum(5)(3)(8) is not equals to sum(5, 3, 8).

// Example: 👇

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1,num2,num3);
//             console.log(`sum of the 3 numbers is ${num1+num2+num3}`);
//         }
//     }
// }
// sum(5)(3)(8);

// now using fat arrow function:

// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3);

// sum(5)(3)(8);

// 5️⃣ CallBack Hell

// setTimeout(() => {
//     console.log(`1 work is done`);
//     setTimeout(() => {
//         console.log(`2 work is done`);
//         setTimeout(() => {
//             console.log(`3 work is done`);
//             setTimeout(() => {
//                 console.log(`4 work is done`);
//                 setTimeout(() => {
//                     console.log(`5 work is done`);
//                     setTimeout(() => {
//                         console.log(`6 work is done`);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// CallBack Hell se bachne ke liye we have Promises.

// 6️⃣ AJAX call using XMLHttpRequest

// continue in project part - XMLHttp

// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from
// a URL without having to do a full page refresh. This enables a Web page to update just part
// of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

// Event Target    <-       XMLHttpRequestEventTarget   <-       XMLHttpRequest

// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.

// AJAX, which initially stood for Asynchronous Javascript and XML, is a programing practice of
// building complex, dynamic webpages using a technology known as XMLHttpRequest.

// AJAX allows you to update parts of the DOM of an HTML page instead without the need for a full page
// refresh. AJAX also lets you work asynchronously, meaning your code continues to run while the targeted
// part of your web page is trying to reload.

// 7️⃣ The Fetch API

// The Fetch API provides a fetch() method defined on the window object, which you can use to perform requests.
// This method returns a Promise that you can use to retrieve the response of the request.

// fetch(GET API URL)
// .then( (apidata) => {
//     console.log(apidata);
//     return apidata.json();
// })
// .then( (actualdata) => {
//     console.log(actualdata);
// })
// .catch( (error) => {
//     console.log(error);
// });

// Example: 👇

// fetch('https://api.covid19api.com/summary')
// .then( (apidata) => {
//     console.log(apidata);
//     return apidata.json();
// })
// .then( (actualdata) => {
//     console.log(actualdata);
// })
// .catch( (error) => {
//     console.log(error);
// });

// 8️⃣ Promises

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage
// when dealing with multiple asynchronous opearations where callbacks can create callback hell
// leading to unmanageable code.

// A Promise is an object that keep track about wheather a certain event has happened already or not.

// Determines what happens after the events has happened.

// 🙋‍♂️ Promises has 3 stages :-

// 1. Pending: Waiting for result.
// 2. Fulfilled: Promise results in success.
// 3. Rejected: Promise result in failure.

// 🙋‍♂️ Promises krne ka 2 ways hain :

// 1. Promises Constructor
// Here, simply hme ek object create krna pdta hai Promise ka.

// Example: 👇

// // ...promise produce
// var promiseObj = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         let roll_No = [1,2,3,4,5];
//         // resolve(roll_No);
//         reject('Error Inside');
//     }, 2000);
// });

// // ...promise consume -> data ko GET krna
// promiseObj.then((rollno) => {
//     console.log(rollno);
// }).catch((error) => {
//     console.log(error);
// });

// resolveFunc(value)      // call on fulfilled
// rejectFunc(value)       // call on rejected

// The methods promise.then(), promise.catch(), promise.finally() are used to associate further action
// with a promise that becomes settled.

// 2. Promise as an Object

// Example: 👇

// 9️⃣ Async-Await

// There is a special syntax to work with promises in a more comfortable fashion, called "async/await".

// The word "async" before a function means one simple thing: a function always returns a promise.

// So the async keyword is added to the functions to tell them to return a promise rather than directly
// returning the value.

// We can use await when calling any function that returns a Promise, including web API functions.

// The keyword await makes JavaScript wait until that promise settles and returns its result.

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 DOM HTMLCollection IN JAVASCRIPT

// An HTMLCollection object is an array-like list of HTML elements.
// Methods like the getElementsByTagName() returns an HTMLCollection.

// 1.🙋‍♂️ item() - Returns the element at the specified index in an HTMLCollection

// Syntax:
// HTMLCollection.item(index)

// Example:

// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTMLCollection item() Method</h1>
// <p>The item() method returns the element at the specified index.</p>
// <p>Click the button to return the content of the first P element on this page:</p>
// <button onclick="myFunction()">Alert innerHTML of P</button>
// <script>
// function myFunction() {
//   var x = document.getElementsByTagName("P");
//   alert(x.item(0).innerHTML);
// }
// </script>
// </body>
// </html>

// Output: The item() method returns the element at the specified index.

// 2.🙋‍♂️ length - Returns the number of elements in an HTMLCollection
// inshort, it will return number of times tag has been used in the html.

// Syntax:
// HTMLCollection.length

// Example:

// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTMLCollection length Property</h1>
// <p>The length property returns the number of elements in a HTMLCollection.</p>
// <p>Click the button to alert the number of P elements on this document:</p>
// <button onclick="myFunction()">Count P elements</button>
// <script>
// function myFunction() {
//   var numberOfTimes = document.getElementsByTagName("p").length;
//   alert(numberOfTimes);
// }
// </script>
// </body>
// </html>

// Output: 2

// 3.🙋‍♂️ namedItem() - Returns the element with the specified ID, or name, in an HTMLCollection
//                     Returns null if the element does not exist.

// Syntax:
// HTMLCollection.namedItem(name)

// Example:

// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTMLCollection namedItem() Method</h1>
// <p id="myElement">The namedItem() method returns the element with the specified ID or name.</p>
// <p>Click the button to return the content of the P element with ID "myElement":</p>
// <button onclick="myFunction()">Alert innerHTML of P</button>
// <script>
// function myFunction() {
//   var x = document.getElementsByTagName("P").namedItem("myElement");
//   alert(x.innerHTML);
// }
// </script>
// </body>
// </html>

// Output: The namedItem() method returns the element with the specified ID or name.

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

//  ==> 👉 DOM Location IN JAVASCRIPT

// 1. The location object contains information about the current URL.
// 2. The location object is part of the window object and is accessed through the window.location property.

// 👉 --> Location Object Properties <-- 👈

// 1. 🙋‍♂️hash - Sets or returns the anchor part (#) of a URL.

// Example: Assume that the current URL is http://www.example.com/test.htm#part2:
// var x = location.hash;

// The result of x will be:
// #part2

// 2. 🙋‍♂️host - Sets or returns the hostname and port number of a URL

// Syntax:
// Return the host property:
// location.host

// Set the host property:
// location.host = hostname:port

// 3. 🙋‍♂️hostname - Sets or returns the hostname of a URL

// Syntax:
// Return the hostname property:
// location.hostname

// Set the hostname property:
// location.hostname = hostname

// 4. 🙋‍♂️href - Sets or returns the entire URL
// 5. 🙋‍♂️origin - Returns the protocol, hostname and port number of a URL
// 6. 🙋‍♂️pathname	- Sets or returns the path name of a URL
// 7. 🙋‍♂️port - Sets or returns the port number of a URL
// 8. 🙋‍♂️protocol	- Sets or returns the protocol of a URL
// 9. 🙋‍♂️search - Sets or returns the querystring part of a URL

// // 👉 --> Location Object Methods <-- 👈

// 1. 🙋‍♂️assign() - Loads a new document
// 2. 🙋‍♂️reload()	- Reloads the current document
// 3. 🙋‍♂️replace() - Replaces the current document with a new one

// props(property) vs arguments
// hoisting = function pehle initialize/call krna
//     pehle initializtion
// promises
// closures =
// box modeling
// DOM
// protypes
// protypes inheritance
