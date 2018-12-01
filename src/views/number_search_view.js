const PubSub = require('../helpers/pub_sub.js');


const NumberSearchView = function(container) {
  this.container = container;
  this.numbers = [];
};

NumberSearchView.prototype.bindEvents = function () {
  PubSub.subscribe('Numbers:all-numbers-ready', (event) => {
    this.numbers = event.detail;
    this.populate(this.numbers);
  });

  this.container.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('NumberSeachView:number-selected', selectedIndex);
  });
};

NumberSearchView.prototype.populate = function (numbers) {

  const numbersData = Object.entries(numbers);

  numbersData.forEach((number, index) => {
    const option = document.createElement('option');
    option.textContent = number[0];
    option.value = number[0];
    this.container.appendChild(option);
  });

};

module.exports = NumberSearchView;
