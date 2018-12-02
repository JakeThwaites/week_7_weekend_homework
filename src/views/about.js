const AboutView = function(container) {
  this.container = container;
};

AboutView.prototype.bindEvents = function () {
  this.container.addEventListener('select', (event) => {
    this.showAboutSection();
  });
};

AboutView.prototype.showAboutSection = function () {

};

module.exports = AboutView;
