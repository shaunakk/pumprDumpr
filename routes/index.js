var express = require('express');
var router = express.Router();
var FuzzySearch = require('fuzzy-search');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newstock', (req, res) => {
  var people = [
    {
      name: {
        firstName: 'Jesse',
        lastName: 'Bowen',
      },
      state: 'Seattle',
    }
  ];
  
  var fuzzy = new FuzzySearch(people, ['name.firstName', 'state'], {
    caseSensitive: true,
  });
  var result = fuzzy.search('ess');
  res.render('newstock', { result: result[0].name.firstName });
});

module.exports = router;
