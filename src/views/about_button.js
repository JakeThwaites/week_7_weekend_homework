 const PubSub = require('../helpers/pub_sub.js');

 const AboutButtonView = function(container) {
   this.container = container;
 };

 AboutButtonView.prototype.bindEvents = function () {
   // this.container.addEventListener('click', (event) => {
   //   const selected = event.target;
   //   PubSub.publish('About:about-section-selected', selected);
   // });
 };

 module.exports = AboutButtonView;
