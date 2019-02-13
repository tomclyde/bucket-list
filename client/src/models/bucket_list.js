const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('BucketFormView:sighting-submitted', (evt) => {
    this.postBucketListItem(evt.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketListItem) => {
      PubSub.publish('BucketList:data-loaded', bucketListItem);
    })
    .catch(console.error);
};

BucketList.prototype.postBucketListItem = function (item) {
  const request = new Request(this.url);
  console.log("item" , item);
  request.post(item)
    .then((items) => {
      PubSub.publish('BucketList:data-loaded', items);
    })
    .catch(console.error);
};

module.exports = BucketList;
