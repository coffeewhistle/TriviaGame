$(document).ready(function () {

    var timeRemaining = 20;
    var intervalId;
    var clockRunning = true;
    var questions = [{
        question: "The first question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer",
        correct: a1
    }, {
        question: "The second question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer",
        correct: a2
    }, {
        question: "The third question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }, {
        question: "The fourth question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }, {
        question: "The fifth question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }, {
        question: "The sixth question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }, {
        question: "The seventh question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }, {
        question: "The eigth question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer"
    }];

    var currentQ = questions[0];
    var questionArray = [ ];
    var rand ;

    // dynamically generate the gameboard
    var gameBoard = {
        timeRemaining: 20,
        timer: function () {
            invervalId = setInterval(gameBoard.count, 1000);
        },

        count: function () {
            gameBoard.timeRemaining--;
        },

        question: function () {
                if (questionArray.length === 0) {
                    rand = Math.floor(Math.random() * 9) + 1 - 1;
                    currentQ = questions[rand];
                    questionArray.push(rand);
                    console.log(rand);
                } else if (questionArray.indexOf(i) != -1) {
                    rand = Math.floor(Math.random() * 9) + 1 - 1;
                    currentQ = questions[rand];
                    questionArray.push(rand);
                    console.log(rand);
                } else {
                    $(".container").html("Game Over!");
                }
            },

        display: function () {
            $("#time-remaining").html("<p>Time Remaining: " + timeRemaining + " seconds</p>");
            $("#question").html("<p>" + currentQ.question + "</p>");
            $("#answers").html(
                "<div id='a1'>" + currentQ.answer1 + "</div>" +
                "<div id='a2'>" + currentQ.answer2 + "</div>" +
                "<div id='a3'>" + currentQ.answer3 + "</div>" +
                "<div id='a4'>" + currentQ.answer4 + "</div>");
        },

        gameCheck: function () {
            $(document).on("click", function () {
                
            });
        },
    };
    gameBoard.timer();
    gameBoard.question();
    gameBoard.display();


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

