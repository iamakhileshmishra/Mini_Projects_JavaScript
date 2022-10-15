var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    started = true;
    $("footer").hide();
    $(".button").hide();
    nextSequence();
}
});

$(".button").click(function(){
    if (!started) {
        started = true;
        $("footer").hide();
        $(".button").hide();
        nextSequence();
    }
});

function nextSequence() {
    userClickedPattern = [];
    $("#heading").text("Level " + ++level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  if(started) checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    } 
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#heading").html('Game Over, Press Any Key to Restart or click');

        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  $(".button").show();
  gamePattern = [];
  started = false;
}