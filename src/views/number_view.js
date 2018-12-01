const PubSub = require('../helpers/pub_sub.js');

const NumberView = function(container) {
  this.container = container;
};

NumberView.prototype.bindEvents = function () {
  PubSub.subscribe('Number:number-selected', (event) => {
    const number = event.detail;
    this.render(number);
  });
};

NumberView.prototype.render = function (number) {
  const numberInfo = this.createElement('div');
  numberInfo.appendChild(this.createCustomElement('h2', "textContent", number));
  numberInfo.appendChild(this.createCustomElement('p', "textContent", number.fact));
};

NumberView.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};


module.exports = NumberView;
