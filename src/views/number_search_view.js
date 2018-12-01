const PubSub = require('../helpers/pub_sub.js');


const NumberSearchView = function(container) {
  this.container = container;
  this.numbers = [];
};

NumberSearchView.prototype.bindEvents = function () {
  PubSub.subscribe('Numbers:all-numbers-ready', (event) => {
    this.numbers = event.detail;
    console.log(this.numbers);
    this.populate(this.numbers);
  });

  this.container.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('Numbers:number;selected');
  });
};

NumberSearchView.prototype.populate = function (numbers) {

  const numbersData = Object.entries(numbers);

  numbersData.forEach((number, index) => {
    const option = document.createElement('option');
    option.textContent = number[0];
    option.value = index;
    this.container.appendChild(option);
  });

};

module.exports = NumberSearchView;
