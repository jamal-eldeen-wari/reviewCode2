'use strict';
let headings = ['Car Name', 'Category', 'Quantity', 'Price'];
let cars = [];
function Car(carName, category, quantity) {
    this.carName = carName;
    this.category = category;
    this.quantity = quantity;
    this.price = gettingPrice(quantity);
    cars.push(this);
}
let form = document.getElementById('form');
let tableContainer = document.getElementById('tableContainer');
let table = document.getElementById('table');
tableContainer.appendChild(table);
form.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    let name = event.target.carName.value;
    let category = event.target.category.value;
    let quantity = event.target.quantity.value;

    let car = new Car(name, category, quantity);
    car.render();
    localStorage.setItem('cars', JSON.stringify(cars));
}
// This function Is Responsible for Showing the Data After Refreshing the page;
function checkingLocalStorage() {
    if (localStorage.getItem('cars')) {
        cars = JSON.parse(localStorage.getItem('cars'));
        renderAfterStoring();
    }
}

function renderAfterStoring() {
    for (let i = 0; i < cars.length; i++) {
        let trBody = document.createElement('tr');
        table.appendChild(trBody);

        let tdName = document.createElement('td');
        trBody.appendChild(tdName);
        tdName.textContent = cars[i].carName;

        let tdCategory = document.createElement('td');
        trBody.appendChild(tdCategory);
        tdCategory.textContent =cars[i].category;

        let tdQuantity = document.createElement('td');
        trBody.appendChild(tdQuantity);
        tdQuantity.textContent = cars[i].quantity;

        let tdPrice = document.createElement('td');
        trBody.appendChild(tdPrice);
        tdPrice.textContent = cars[i].price;
    }

}

function header() {
    let thead = document.createElement('thead');
    table.appendChild(thead);

    let trHeader = document.createElement('tr');
    thead.appendChild(trHeader);

    for (let i = 0; i < headings.length; i++) {
        let th = document.createElement('th');
        trHeader.appendChild(th);
        th.textContent = headings[i];
    }
}

Car.prototype.render = function () {
    let trBody = document.createElement('tr');
    table.appendChild(trBody);

    let tdName = document.createElement('td');
    trBody.appendChild(tdName);
    tdName.textContent = this.carName;

    let tdCategory = document.createElement('td');
    trBody.appendChild(tdCategory);
    tdCategory.textContent = this.category;

    let tdQuantity = document.createElement('td');
    trBody.appendChild(tdQuantity);
    tdQuantity.textContent = this.quantity;
    
    let tdPrice = document.createElement('td');
    trBody.appendChild(tdPrice);
    tdPrice.textContent = this.price;


}
function gettingPrice(quantity){
    return (Math.floor((Math.random() * 25000) + 5000))*quantity;
}
checkingLocalStorage();
header();