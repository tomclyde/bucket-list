const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = 'item';
  const description = this.createHeading(item.item);
  itemContainer.appendChild(description);

  this.container.appendChild(itemContainer);
};

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

module.exports = BucketView;
