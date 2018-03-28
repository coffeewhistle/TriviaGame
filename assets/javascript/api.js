var newRow = $("<div>").attr("class", "row");
var newCol = $("<div>").attr("class", "col");
var newDiv = $("<div>");
var timeRemaining = 20;
var questions = ["I'm a question!"];
var answers = ["I'm an answer!"];

var movie = "space jam";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 8; i++) {
        questions.push(response[i]);
    }
    console.log(questions);
});

function newDiv() {
    $("body").append("<div>");
}

function gameBoard() {
    var gameTitle = newDiv.text("Totally Trivial Trivia!");
    var timeDisplay = newDiv.text("Time Remaining: " + timeRemaining);
    $("body").append(newRow, newCol, gameTitle);
}

function scoreBoard() {

}

gameBoard();
