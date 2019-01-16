// 'use strict';

// var tanner = {
//   course: '201d44',
//   enrolled: true,
//   instructors: 'Sam',
//   first: 'Tanner',
//   lastName: 'Percival',
//   preferredName: 'Tan-Man',
//   homeTown: 'Tacoma',
//   introduction: function () {
//     return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
//   }
// };

// We would need 228 lines of code to model the entire class in objects

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticProperty1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//====================
// Student Constructor
//====================

// var allStudents = [];

// function Student(firstName, lastName, preferredName, homeTown) {
//   this.course = '201d44';
//   this.enrolled = true;
//   this.instructor = 'Sam';
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.preferredName = preferredName;
//   this.homeTown = homeTown;
//   allStudents.push(this);
// }

// Student.prototype.introduction = function () {
//   return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
// };

// Constructor = 12
// Each instance = 1 * 19
// Total lines to model the entire class: 31

//==========================
//Student Prototype Property
//==========================

// new Student instances

'use strict'
var cookieSales
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var Table = document.getElementById('Cookie table');

  new Store('1st & Pike', 23, 65, 6.3),
  new Store('SeaTac Airport', 3, 24, 1.2),
  new Store('Seattle Center', 11, 38, 3.7),
  new Store('Capitol Hill', 20, 38, 2.3),
  new Store('Alki', 2, 16, 4.6),

function Store(store, minCust, maxCust, avgCookie) {
  this.storeName = store;
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookie = avgCookie,
  this.storeCookiePerHour = [];
  this.totalDailyCookies = 0;
  cookieSales.push(this)
}



