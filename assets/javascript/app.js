$(document).ready( function() {

    var timeRemaining = 20;
    var intervalId;
    var clockRunning = true;
    var questions = {
        
    };

    // dynamically generate the gameboard
    var gameBoard = {
        timeRemaining: 20,
        timer: function() {
            invervalId = setInterval(gameBoard.count, 1000);
        },

        count: function() {
            gameBoard.timeRemaining--;
        },

        question: function() {

        }
    };
    $("#time-remaining").html("<p>Time Remaining: " + timeRemaining + "</p>");

    // set the timer to 20 seconds
    // begin timer countdown
    // select a random question
    // provide 4 possible answers
    // listen for a click on each of the answers
    // check if that answer is the correct answer to the question
    // if the answer is correct then rewrite the gameboard to show "Correct!" and show a gif related to the question
    // if the answer is incorrect then rewrite the gameboard to show "Incorrect!" and show a gif related to the question
    // reset the timer to 20 seconds and select a new question
    // keep track of the questions asked and don't ask the same question twice
    // once all 8 questions have been answered display the score and provide a "New Game" button

});

