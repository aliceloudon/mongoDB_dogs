var express = require('express')
var app = express()
var dogRouter = express.Router()

var DogQuery = require('../db/dogQuery.js')
var dogQuery = new DogQuery()

// DOG INDEX
dogRouter.get('/', function(req, res) {
  dogQuery.all(function(docs){
    res.json(docs)
  })
})

module.exports = dogRouter