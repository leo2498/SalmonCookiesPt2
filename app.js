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
  this.custPerHour = [];
  this.totalDailyCookies = 0;
  cookieSales.push(this)
}

Store.prototype.numbers = function(){
  for(var i = 0 ; i < storeHours.length; i++){
    this.storeCookiePerHour.push(Math.floor(Math.random() * (this.max - this.min)) + this.min);
    }
}

Store.prototype.custPerHour = function() {
  for(var i = 0 ; i < time.length ; i++ ){
    this.custPerHour.push(Math.floor((this.avgCookie * this.custPerHour[i])))
  }
}

for(var i = 0; i < cookieSales.length; i++){
  cookieSales[i].numbers();
  cookieSales[i].storeCookiePerHour();
}

Store.prototype.render = function()   {
  cookieSales[i].storeCookiePerHour();
  cookieSales[i].numbers();
}

Store.prototype.render = function() {
  var trElement = document.createElement('tr')
  var tdElement = document.createElement('td')
  tdElement.textContent = this.storeName;
  trElement.appendChild(trElement);

  for(var i = 0 ; i < storeHours.length; i++) {
    var tdElement = document.createElement('td')
    tdElement.textContent = this.storeCookiePerHour[i];
    trElement.appendChild
  }
  tdElement = document.createElement('td')
  this.valueSum();
  tdElement.textContent = this.totalDailyCookies;
  trElement.appendChild(tdElement)
  Table.appendChild(tdElement)
}
Store.prototype.valueSum = function (){

  for(var i = 0; i < storeHours.length; i++){
    this.totalDailyCookies += this.storeCookiePerHour[i]
  }
}

function makingHeader(){
  var trElement = document.createElement('tr');
  var emptyTh = document.createElement('th');
  thElement = document.createElement('th')

  trElement.appendChild(emptyTh)
  for(var i = 0; i < storeHours.length; i++){
    var thElement = document.createElement('th')
    thElement.textContent = storeHours[i];
    trElement.appendChild(thElement);
  }

  var totalDailyCookies = document.createElement('th');
  totalDailyCookies.textContent = 'Total'
  trElement.appendChild(totalDailyCookiesElemntElement)
  Table.appendChild(trElement);
}

function renderAllStores(){
  for (var i = 0; i < cookieSales.length; i++){
    cookieSales[i].render()
  }
}

makingHeader();
renderAllStores();