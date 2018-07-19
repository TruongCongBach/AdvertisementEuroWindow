const express                = require('express');
const router                 = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.njk', { title: 'EuroWindow' });
});

router.get('/test', function(req, res, next) {
  res.render('test.njk', { title: 'EuroWindow' });
});

module.exports = router;
