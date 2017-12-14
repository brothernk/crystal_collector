//Global variables
var wins = 0;
var losses = 0;
var counter = 0;
$("#wins").append("Wins: " + wins);
$("#losses").append("Losses: " + losses);
$("#total").text(counter);

// Create random target number
var targetNumber = Math.floor(Math.random()*100+1);
$("#number").text(targetNumber);

//Assign random number to each crystal
var randomNumber = function(){
   return Math.floor(Math.random()*9+1);
}

var crystalNumbers = Array(4).fill(0).map(randomNumber);
$(".crystal-image").append(randomNumber);

//Creates image for the gemstones
for (var i = 0; i < crystalNumbers.length; i++){
   var imageCrystal = $("<img>");
   imageCrystal.addClass("crystal-image");
   imageCrystal.attr("src", "assets/images/gem.jpeg");
   imageCrystal.attr("data-crystalvalue", crystalNumbers[i]);
   $("#crystals").append(imageCrystal);
}

//Running total of crystals added together
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#total").text(counter);

    if (counter === targetNumber) {
      wins++;
      $("#wins").text("Wins: " + wins);
      counter = 0;
    }
    else if (counter >= targetNumber) {
      losses++;
      $("#losses").text("Losses: " + losses);
      counter = 0;
    }
});

//Still playing around with getting the target number and crystal values to reset after a win or a loss.









