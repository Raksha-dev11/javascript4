// ES6 module

// import {PI,getCircumference,getArea,getVolume} from './mathUtil.js';

// console.log(PI);
// const circumference=getCircumference(10);
// const area=getArea(10);
// const volume=getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// ASYNCHRONUS AND SYNCHRONUS

// function func1(callback) {
//     setTimeout(() => {
//         console.log("Task 1");
//         callback()
//     }, 3000);
// }

// function func2() {
//     console.log("task 2");
//     console.log("task 3");
//     console.log("task 4");
// }

// func1(func2);

// ERROR

// try{
//     console.log(x);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("this always executes")
// }

// console.log("You have reached the end")
// try{
// const dividend=Number(window.prompt("Enter a dividend: "));
// const divisor=Number(window.prompt("Enter a divisor: "));

// if(divisor==0){
//     throw new Error("You can't divide by 0")
// }
// if(isNaN(dividend)||isNaN(divisor)){
//     throw new Error("Values must be a number");
// }

// const result=dividend/divisor;
// console.log(result);
// }
// catch(error){
//     console.log(error);
// }

// console.log("this is the end")

// DOM(DOCUMENT OBJECT MODEL)

// ELEMENT SELECTORS

// const myHeading=document.getElementById("my-heading");
// myHeading.style.backgroundColor="yellow";
// myHeading.style.textAlign="center";

// console.log(myHeading);

// const fruits=document.getElementsByClassName("fruits");

// // // fruits[0].style.backgroundColor="yellow";
// // for(let fruit of fruits){
// //     fruit.style.backgroundColor="yellow";
// // }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor="yellow";
// })
// console.log(fruits);

const h4elements=document.getElementsByTagName("h4");
const liElements=document.getElementsByTagName("li");

// h4elements[0].style.backgroundColor="yellow";

for(let h4element of h4elements){
    h4element.style.backgroundColor="yellow"
}

for(let liElement of liElements){
    liElement.style.backgroundColor="lightgreen"
}

console.log(h4elements)