// // var -> scope: function
// // let -> scope: block
// // const -> scope: block
// // const for constant values only.

// function myFunction(){
//   for (var i = 0; i < 5; i++){
//     console.log(i);
//   }
//   // the var i is accessible outside of the scope.
//   // this is a problem with var.
//   console.log(i);
// }

// function myFunction2(){
//   for (let i = 0; i < 5; i++){
//     console.log(i);
//   }
//   // the let type of i is not accessible outside of the scope now.
//   //console.log(i);
// }

// myFunction2();



// objects
// defining an object 
// const person = {
//   name: "Pronob", // property
//   talk: function(){}, // method
//   walk(){            // another way of method define
//     console.log(this);    
//   }
// }

// person.name = "Pronob Das";
// person["name"] = "Pronob Das";

// person.talk();
// person["talk"]();

// const targetName = "name";
// person[targetName] = "Hello";
// //person[targetName.value] = "" // when targetValue is an user input. 

// console.log(person);


// person.walk(); 
// // At the time of calling the function using the object 
// // "this" returns the object using the object that the function was called on.

// const walk = person.walk; // ref of the walk function
// //console.log(walk);
// walk();
// // Now the function was called using an outside reference / standalone function
// // Here "this" will return a global object (Window object), not the person object.

// const walk2 = person.walk.bind(person); // this will now point to the person ref.
// walk2();




// Arrow 

// const square = function(number){
//   return number*number;
// }

// // does the same task as before.
// const square = (number) => number*number;

// const f = () => "Hello";
// const f2 = (v1, v2) => v1*v2;

// console.log(f);


// const jobs = [
//   { id: 1, isActive: true},
//   { id: 2, isActive: true},
//   { id: 3, isActive: false},
// ];

// //const activeJobs = jobs.filter(function(job) { return job.isActive;});
// const activeJobs = jobs.filter(job => job.isActive);

// console.log(activeJobs);



//////////// Arrow functions don't rebind the "this" keyword.
// const person = {
//   talk() {
//     setTimeout(function(){
//       console.log("this", this);
//     }, 1000);
//   }
// }

// person.talk();
// // returns the window object, as it is not call from the object.
// // was called inside of a standalone function.

// // solve-1
// const person1 = {
//   talk() {
//     var self = this;
//     setTimeout(function(){
//       console.log("self", self);
//     }, 1000);
//   }
// }

// person1.talk();

// // solve-2 
// const person2 = {
//   talk() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// }

// person2.talk();


// const colors = ['red', 'green', 'blue'];
// const items = colors.map(color => '<li>'+color+'</li>');
// //const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);


// Object obstruction

// const address = {
//     street: '',
//     city: '',
//     country: ''
// };

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;
 
// // same as previous
// const {street, city, country} = address;

// //const {street, city} = address;
// const {street : st} = address; // street as name st.


// // spread operator
// const arr = [1,2,3];
// const arr2 = [1,4,6];

// const combined = arr.concat(arr2);
// const combined2 = [...arr, ...arr2];
// const combined2 = [...arr, "3435", ...arr2, "huhh"];

// const clone = [...arr];

// const o1 = {
//     name: "Mee"
// };
// const o2 = {
//     job: "joooob"
// };

// const combined = {...o1, ...o2, location: "Aus"};




// // classes
// class Person {
//     constructor(name){
//         this.name = name;
//     }


//     walk(){
//         console.log("walk");
//     }
// }

// const person = new Person("Pronob");
// person.walk();

// class Teacher extends Person{
//     constructor(name, degree){
//         super(name);
//         this.degree = degree;
//     }


//     teach(){
//         console.log("teach");
//     }
// }

// // const teacher = new Teacher("Pro");
// // teacher.teach();
// // teacher.walk();

// const teacher = new Teacher("Pro", "BSc");
// teacher.teach();
// teacher.walk();


import { Teacher } from "./Teacher";
const teacher = new Teacher("Pro", "BSc");
teacher.teach();
teacher.walk();


// Default Export -> import ... from ''; // need to use default in the class which needed to be exported by default.
// Named Export -> import {...} from '';

// import React, { Component } from "react";
// Both in the same line.