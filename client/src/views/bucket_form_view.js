const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function (form) {
  this.form = form;
};

BucketFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newActivity = this.createActivity(evt.target);
  PubSub.publish('BucketFormView:bucketitem-submitted', newActivity);
  evt.target.reset();
};

BucketFormView.prototype.createActivity = function (form) {
  console.log(form.item.value);
  const newActivity = {
    item: form.item.value
  };
  return newActivity;
};

module.exports = BucketFormView;
