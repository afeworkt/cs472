x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
                 console.log(x);
                 console.log(a);
                 var f = function(a, b, c) {
} 
f(a,b,c);
                 console.log(b);
var x = 10; 
}
c(8,9,10);
console.log(b);
console.log(x);


// var add = (function () {
//     var counter = 0;
//     return function () {
//             return counter += 1;
// } })();
// var counter = (function () {
//     let counter = 0;
//     let add=function(){
//         counter += 1;
//         return counter;
//     };
//     let reset=function(){
//         counter = 0;
//     };
    
//     return {
//         add:add,
//         reset:reset
//     };

// })();
// var c=counter;
// console.log(c.add());
// console.log(c.add());
// // console.log(c.reset());
// c.reset()
// console.log(c.add());

// function make_adder(inc) { 
//     var counter = 0;
//         return function () {
//             return counter += inc;
//         };
// }
// add5 = make_adder(5);
// add5(); add5( ); 
// console.log(add5()); // final counter value is 15
// add7 = make_adder(7);
// add7( ); add7( ); 
// console.log(add7());

// var x = 9;
// function myFunction() {
// return x * x; }
// console.log(myFunction());
// x = 5;
// console.log(myFunction());


// var foo = 1;
// function bar() {
//         if (!foo) {
//                var foo = 10;
//         }
//         console.log(foo);
// } 
// bar();

// function makeSizer(size) {
//     return function () {
//         document.body.style.fontSize = size + 'px';
//     };
// }
// var size12 = makeSizer(12);
// var size14 = makeSizer(14);
// var size16 = makeSizer(16);
// window.onload = function () {
//     document.getElementById('size-12').onclick = size12;
//     document.getElementById('size-14').onclick = size14;
//     document.getElementById('size-16').onclick = size16;
// }

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
// let promise = job(true);
// promise.then(function (data) {
//     console.log(data);
//     return job(false);
// })
//     .catch(function (error) {
//         console.log(error);
//         return 'Error caught';
//     });

// const promise = new Promise(
//     (resolve, reject) => { 
//         resolve("Hattori");
//     setTimeout(()=> reject("Yoshi"), 500); 
// });
//     promise.then(val => console.log("Success: " + val)).catch(e => console.log("Error: " + e));

// const promise = new Promise((resolve, reject) => { reject("Hattori");
// });
// promise.then(val => console.log("Success: " + val)) .catch(e => console.log("Error: " + e));
// Answer: 
// Error: Hattori

// Private Field: name Private Field: age Private Field: salary
// Public Method: setAge(newAge)
// Public Method: setSalary(newSalary)
// Public Method: setName(newName)
// Private Method: getAge( )
// Private Method: getSalary( )
// Private Method: getName( )
// Public Method: increaseSalary(percentage)
// Public Method: incrementAge( ) // uses private getAge( )

// Module=(function(){
//     let name,age,salary;
//     let getName = function () {
//         return name; 
//     };
//     let getAge = function () {
//         return age; 
//     };
//     let getSalary = function () {
//         return salary; 
//     };
//     let setName = function (name) {
//         this.name=name; 
//     };
//     let setAge = function (age) {
//         this.age=age; 
//     };
//     let setSalary = function (salary) {
//         this.salary=salary; 
//     };

//     let increaseSalary=function(percentage){
//         let newSalary=this.getSalary()*percentage;
//         this.setSalary(newSalary);
//     };
    
//     let incrementAge=function(){
//         let newAge=this.getAge()+1;
//         this.setAge(newAge);
//     };
//     return {
//         getName:getName,
//         getAge:getAge,
//         getSalary:getSalary,
//         setName:setName,
//         setAge:setAge,
//         setSalary:setSalary,
//         increaseSalary:increaseSalary,
//         incrementAge:incrementAge
//     };
// })();


// Module=(function(){
//     let name,age,salary;

//     return {
//         getName:function () {
//             return name; 
//         },
//         getAge:function () {
//             return age; 
//         },
//         getSalary:function () {
//             return salary; 
//         },
//         setName:function (name) {
//             this.name=name; 
//         },
//         setAge:function (age) {
//             this.age=age; 
//         },
//         setSalary: function (salary) {
//             this.salary=salary; 
//         },
//         increaseSalary:function(percentage){
//             let newSalary=this.getSalary()*percentage;
//             this.setSalary(newSalary);
//         },
//         incrementAge: function(){
//         let newAge=this.getAge()+1;
//         this.setAge(newAge);
//     }
//     };
// })();



// Module=(function(){
//     let name,age,salary;
//     let myObj={};
//     let getName = function () {
//         return name; 
//     };
//     let getAge = function () {
//         return age; 
//     };
//     let getSalary = function () {
//         return salary; 
//     };
//     let setName = function (name) {
//         this.name=name; 
//     };
//     let setAge = function (age) {
//         this.age=age; 
//     };
//     let setSalary = function (salary) {
//         this.salary=salary; 
//     };

//     let increaseSalary=function(percentage){
//         let newSalary=this.getSalary()*percentage;
//         this.setSalary(newSalary);
//     };
    
//     let incrementAge=function(){
//         let newAge=this.getAge()+1;
//         this.setAge(newAge);
//     };
//         myObj.getName=getName;
//         myObj.getAge=getAge;
//         myObj.getSalary=getSalary;
//         myObj.setName=setName;
//         myObj.setAge=setAge;
//         myObj.setSalary=setSalary;
//         myObj.increaseSalary=increaseSalary;
//         myObj.incrementAge=incrementAge;
//         return myObj;
// })();

// Module.address='';
// Module.getAddress=function(){
//     return this.address;
// };
// Module.setAddress=function(address){
//     this.address=address;
// };