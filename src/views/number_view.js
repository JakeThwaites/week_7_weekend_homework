const PubSub = require('../helpers/pub_sub.js');

const NumberView = function(container) {
  this.container = container;
};

NumberView.prototype.bindEvents = function () {
  PubSub.subscribe('Number:selected-number-info', (event) => {
    const number = event.detail;
    this.render(number);
  });
};

NumberView.prototype.render = function (number) {

  const numberInfo = this.createCustomElement('div', 'id', 'number-info');
  numberInfo.appendChild(this.createCustomElement('p', "textContent", number));

  this.container.appendChild(numberInfo);
};

NumberView.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};


module.exports = NumberView;
