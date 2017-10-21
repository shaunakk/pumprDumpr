const express = require('express');
const router = express.Router();
const FuzzySearch = require('fuzzy-search');
const stocks = require('../res/stocks.json');
const format = require('format-number');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newstock', (req, res) => {
  var names = [];
  for (let num in stocks) {
    let company = {};
    company.name = stocks[num].Symbol
    company.marketCap = format({prefix: '$', integerSeparator: ','})(parseInt((stocks[num].MarketCap)/1000)*1000);
    company.companyName = stocks[num].Name
    names.push(company);
  }
  res.render('newstock', {names});
});

router.get('/stocksearch', (req, res) => {
  var fuzzy = new FuzzySearch(stocks, ['Symbol'], {
    caseSensitive: false,
  });
  var result = fuzzy.search(req.query.stock);
  res.type('json');
  res.send(result);
});

module.exports = router;
