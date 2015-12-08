Requests = new Mongo.Collection("requests");

Requests.allow({
  insert: function (userId, request) {
    return userId;
  },
  update: function (userId, request, fields, modifier) {
    return userId;
  },
  remove: function (userId, request) {
    return userId;
  }
});