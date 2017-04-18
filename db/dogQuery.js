var MongoClient = require('mongodb').MongoClient

var DogQuery = function(){
  this.url = "mongodb://localhost:27017/dog_library"
}

DogQuery.prototype = {

  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        console.log("connected!")
        // GET THE RIGHT COLLECTION
        var collection = db.collection('dogs')
        // FIND ALL THE FILMS
        // TURN THEM INTO AN ARRAY
        collection.find().toArray(function(err, docs){
          // INVOKE A CALLBACK
          onQueryFinished(docs)
        })
      }
    })
  }

}

module.exports = DogQuery