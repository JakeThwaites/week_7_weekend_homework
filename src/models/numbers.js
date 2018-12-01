const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Numbers = function() {
  this.numbers = [];
};

Numbers.prototype.bindEvents = function () {
  this.getData();

  PubSub.subscribe('NumberSearchView:number-selected', (event) => {
    const selectedIndex = event.detail;
    this.publishNumberInfo(selectedIndex);
  });
};

Numbers.prototype.getData = function () {
  const url = 'http://numbersapi.com/1..100';
  const request = new RequestHelper(url);
  request.get()
    .then((numbers) => {
      this.data = numbers;
      PubSub.publish('Numbers:all-numbers-ready', this.data);
    });
};

Numbers.prototype.publishNumberInfo = function (index) {
  const selectedNumberInfo = this.numbers[index];
  PubSub.publish('Number:selected-number-info', selectedNumberInfo);
};

module.exports = Numbers;
