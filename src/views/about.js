const PubSub = require('../helpers/pub_sub.js');

const AboutView = function(container) {
  this.container = container;
  this.aboutInfo = "This is a website with a bunch of random facts about numbers! To view a random fact, just select a number from the dropdown box.";
};

AboutView.prototype.bindEvents = function () {
  // PubSub.subscribe('About:about-section-selected', (event) => {
  //   this.showAboutSection();
  // });

   document.querySelector('click#about-button').addEventListener('click', this.showAboutSection() );
};

AboutView.prototype.showAboutSection = function () {
  const aboutInfo = document.createElement('p');
  aboutInfo.textContent = this.aboutInfo;

  this.container.innerHTML = "";
  this.container.appendChild(aboutInfo);
};

module.exports = AboutView;
