const Numbers = require('./models/numbers.js');
const NumberSearchView = require('./views/number_search_view.js');
const NumberView = require('./views/number_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#pick-a-number');
  const numberDropdown = new NumberSearchView(selectElement);
  numberDropdown.bindEvents();


  const infoDiv = document.querySelector('div#number');
  const numberView = new NumberView(infoDiv);
  numberView.bindEvents();

  const numbers = new Numbers();
  numbers.getData();

})
