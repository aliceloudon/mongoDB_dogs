var MongoClient = require('mongodb').MongoClient

var DogQuery = function(){
  this.url = "mongodb://localhost:27017/dog_library"
}

DogQuery.prototype = {

}

module.exports = DogQuery