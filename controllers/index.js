var express = require('express')
var router = express.Router()
var path = require('path')

router.use('/api/dogs', require('./dogs'))

module.exports = router