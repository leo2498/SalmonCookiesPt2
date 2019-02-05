'use strict'
var cookieSales
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var Table = document.getElementById('Cookie table');

  new Store('1st & Pike', 23, 65, 6.3)
  new Store('SeaTac Airport', 3, 24, 1.2)
  new Store('Seattle Center', 11, 38, 3.7)
  new Store('Capitol Hill', 20, 38, 2.3)
  new Store('Alki', 2, 16, 4.6)

function Store(store, minCust, maxCust, avgCookie) {
  this.storeName = store;
  this.minCust = minCust
  this.maxCust = maxCust
  this.avgCookie = avgCookie
  this.storeCookiePerHour = [];
  this.custPerHour = [];
  this.totalDailyCookies = 0;
  this.storeCookiePerHour.push(this);
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

for(var i = 0; i < storeCookiePerHour.length; i++){
  storeCookiePerHour[i].numbers();
  storeCookiePerHour[i].storeCookiePerHour();
}

Store.prototype.render = function()   {
  storeCookiePerHour[i].storeCookiePerHour();
  storeCookiePerHour[i].numbers();
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
  for (var i = 0; i < storeCookiePerHour.length; i++){
    storeCookiePerHour[i].render()
  }
}

makingHeader();
renderAllStores();

var totalTH = document.createElement('th');
  totalTH.textContent = 'Daily Location Total';
  newTR.appendChild(totalTH);

  //rendering and populating each store row
  for(var j = 0; j < stores.length; j++) {
    stores[j].renderRow(tableData);
  }
  renderTableFoot();

  var renderTableFoot = function() {
    var tableData = document.getElementById ('store_data');
    var hourTotalTFoot = document.createElement('tfoot');
    tableData.appendChild(hourTotalTFoot);
  
    var hourTotalTRow = document.createElement('tr');
    hourTotalTFoot.appendChild(hourTotalTRow);

    userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var  = event.target.store_title.value;
  var minCust = parseInt(event.target.min_customers.value);
  var maxCust = parseInt(event.target.max_customers.value);
  var avgCookie = parseInt(event.target.avg_cookies_per.value);

  event.target.store_title.value = '';
  event.target.min_customers.value = '';
  event.target.max_customers.value = '';
  event.target.avg_cookies_per.value = '';

