$(document).ready(function () {

    var questions = [{
        question: "The first question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer",
        correct: "The first answer"
    }, {
        question: "The second question",
        answer1: "The first answer",
        answer2: "The second answer",
        answer3: "The third answer",
        answer4: "The fourth answer",
        correct: "The third answer"
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

    var timeRemaining = 20;
    var intervalId;
    var clockRunning = false;
    var question = Math.floor(Math.random() * 8);
    var questionsArr = [];

    $("#startButton").on("click", function () {
        if (clockRunning == false) {
            $("#time-remaining").text("Time Remaining: 20 seconds");
            intervalId = setInterval(decrement, 1000);
        }
        clockRunning = true;
        $("#startButton").hide();
        game();
    });

    function decrement() {
        if (timeRemaining > 0) {
            timeRemaining--;
            console.log(timeRemaining);
            $("#time-remaining").text("Time Remaining: " + timeRemaining + " seconds");
        }
    }

    function quizText() {
        $("#question").html(questions[question].question);
        $("#a1").html("<button>" + questions[question].answer1 + "</button>");
        $("#a2").html("<button>" + questions[question].answer2 + "</button>");
        $("#a3").html("<button>" + questions[question].answer3 + "</button>");
        $("#a4").html("<button>" + questions[question].answer4 + "</button>");
    }

    function game() {
        if (clockRunning == false) {
            $("#time-remaining").text("Time Remaining: 20 seconds");
            intervalId = setInterval(decrement, 1000);
        }
        
        question = Math.floor(Math.random() * 8);
        console.log(question);
        quizText(question);

        $("button").on("click", function () {
            if (this.innerHTML == questions[question].correct) {
                console.log("Correct!");
                timeRemaining = 20;
                questionsArr.push(question);
                clearInterval(intervalId);
                clockRunning = false;
                correct();
                // question = Math.floor(Math.random() * 8);
                game();


            } else if (this.innerHTML !== questions[question].correct) {
                console.log("Incorrect!");
                timeRemaining = 20;
                questionsArr.push(question);
                clearInterval(intervalId);
                clockRunning = false;
                incorrect();
                // question = Math.floor(Math.random() * 8);
                game();
            }
        });
    }

    function correct() {
        $("#right-wrong").show();
        $("#right-wrong").html("<img src='assets/images/correct.gif' />");
        // $.ajax({
        //     url: "https://api.giphy.com/v1/gifs/random?api_key=5F3SaJqWiinKu8tAEiWD6P2Nu1scjWVa&tag=correct",
        //     method: "GET"
        // }).then(function (response) {
        //     $("#game").html("<img src=" + response.data.image_original_url + "/>");
        // });
    }

    function incorrect() {
        $("#right-wrong").show();
        $("#right-wrong").html("<img src='assets/images/incorrect.gif' />");
        // $.ajax({
        //     url: "https://api.giphy.com/v1/gifs/random?api_key=5F3SaJqWiinKu8tAEiWD6P2Nu1scjWVa&tag=incorrect",
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response);
        //     $("#game").html("<img src=" + response.data.image_original_url + "/>");
        // });
    }


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

