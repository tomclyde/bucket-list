const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketListGridView = function (container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

BucketListGridView.prototype.render = function (items) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  items.forEach((item) => bucketView.render(item));
};

module.exports = BucketListGridView;
