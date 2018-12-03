const Numbers = require('./models/numbers.js');
const NumberSearchView = require('./views/number_search_view.js');
const NumberView = require('./views/number_view.js');

const AboutView = require('./views/about.js');
const AboutButtonView = require('./views/about_button.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#pick-a-number');
  const numberDropdown = new NumberSearchView(selectElement);
  numberDropdown.bindEvents();


  const infoDiv = document.querySelector('div#number-display');
  const numberView = new NumberView(infoDiv);
  numberView.bindEvents();

  const numbers = new Numbers();
  numbers.bindEvents();

  const aboutElement = document.querySelector('click#about-button');
  const aboutButton = new AboutButtonView(aboutElement);
  aboutButton.bindEvents();

  const aboutView = new AboutView(infoDiv);
  aboutView.bindEvents();
})
