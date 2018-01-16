$(document).ready(function() {
  var suits = ["spades", "clubs", "hearts", "diamonds"]
  var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]

  var deck = suits.forEach(function(suit){
    return ranks.forEach(function(rank){
      return $('#deck').append("<p>" + rank + " of " + suit + "</p>");
    })
  });
});
