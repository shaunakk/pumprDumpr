var books = [{ "title": "First Book", "author": "John Doe" }, { "title": "...", "author": "..." }];
var fuzzyhound = new FuzzySearch({ source: books, keys: ["title", "author"] });
$(document).ready(function(){
    $('#typeahead-input').typeahead({
        minLength: 1,
        highlight: false //let FuzzySearch handle highlight
    },
    {
        name: 'books',
        source: fuzzyhound,
        templates: {
            suggestion: function (result) { return "<div>" + fuzzyhound.highlight(result.title) + " by " + fuzzyhound.highlight(result.author) + "</div>" }
        }
    });
})
