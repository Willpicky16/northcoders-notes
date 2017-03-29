# Express Lecture

ps aux | grep 3000

## Express Router

server.js
``` JavaScript
const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);
```
Create Directory folder - routes
Create file - called api.js within routes

api.js
``` JavaScript
var express = require('express');
var router = express.Router();
var tweets = require('../tweets.json');

router.get('/', function (req, res) {
  console.log('request on /api/')
  res.status('200').json({status: 'OK'})
})

router.get('/tweets', function (req, res) {
  console.log('request on /api/tweets')
  res.status('200').json({tweets})
})

module.exports = router;
```
