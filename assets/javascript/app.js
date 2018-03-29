$(document).ready(function () {

    var questions = [{
        question: "What was the first console video game that allowed the game to be saved?",
        answer1: "Super Smash Bros.",
        answer2: "Dig Dug",
        answer3: "The Legend of Zelda",
        answer4: "Diddy Kong Racing",
        correct: "The Legend of Zelda"
    }, {
        question: "What does the acronym USB stand for when referring to a computer port?",
        answer1: "Universal Serial Bus",
        answer2: "Universal Cereal Bust",
        answer3: "Universe of Sensory or Bust",
        answer4: "United States or Bust",
        correct: "Universal Serial Bus"
    }, {
        question: "When referring to a computer monitor, what does the acronym LCD stand for?",
        answer1: "Like, crystals dawd",
        answer2: "Liquid Crystal Drank",
        answer3: "Liquid Crystal Display",
        answer4: "Lemme Cut Dat",
        correct: "Liquid Crystal Display"
    }, {
        question: "Nintendo is a consumer electronics and video game company founded in what country?",
        answer1: "Nintendoland",
        answer2: "Japanville",
        answer3: "Mushroom Kingdom",
        answer4: "Japan",
        correct: "Japan"
    }, {
        question: "The first person shooter video game Doom was first released in what year?",
        answer1: "1993",
        answer2: "1963",
        answer3: "1923",
        answer4: "1903",
        correct: "1993"
    }, {
        question: "In a website browser address bar what does 'www' stand for?",
        answer1: "Wow, Whatta World!",
        answer2: "World's Widest Web",
        answer3: "World Wide Web",
        answer4: "Wild Willy's Webers",
        correct: "World Wide Web"
    }, {
        question: "In database programming, SQL is an acronym for what?",
        answer1: "Scheduled Question Language",
        answer2: "Structured Query Language",
        answer3: "Search Query Listen",
        answer4: "Si, Que Lingua?",
        correct: "Structured Query Language"
    }, {
        question: "What is the name of the main protagonist in the Legend of Zelda series of video games?",
        answer1: "Her Royal Highness, Zelda",
        answer2: "Madam Zelda",
        answer3: "Link",
        answer4: "Princess Zelda",
        correct: "Link"
    }];

    var timeRemaining = 10;
    var intervalId;
    var clockRunning = false;
    var question = Math.floor(Math.random() * 8);
    var questionsArr = [];
    var count = 0;
    var correctCount = 0;
    var incorrectCount = 0;

    $("#startButton").on("click", function () {
        if (clockRunning == false) {
            $("#time-remaining").html("<h2>Time Remaining: 10 seconds</h2>");
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
            $("#time-remaining").html("<h2>Time Remaining: " + timeRemaining + " seconds</h2>");
        }
    }

    function quizText() {
        $("#question").html("<h3>"+questions[question].question+"</h3>");
        $("#a1").html("<button>" + questions[question].answer1 + "</button>");
        $("#a2").html("<button>" + questions[question].answer2 + "</button>");
        $("#a3").html("<button>" + questions[question].answer3 + "</button>");
        $("#a4").html("<button>" + questions[question].answer4 + "</button>");
    }

    function game() {
        if (clockRunning == false) {
            $("#time-remaining").html("<h2>Time Remaining: 10 seconds</h2>");
            intervalId = setInterval(decrement, 1000);
        }
        
        question = Math.floor(Math.random() * 8);
        console.log(question);
        quizText(question);

        $("button").on("click", function () {
            if (this.html == questions[question].correct && count < 7) {
                console.log("Correct!");
                timeRemaining = 10;
                questionsArr.push(question);
                clearInterval(intervalId);
                clockRunning = false;
                correct();
                // question = Math.floor(Math.random() * 8);
                game();
                count++;
                correctCount++;
                console.log(count);
            } else if (this.innerHTML !== questions[question].correct && count < 7) {
                console.log("Incorrect!");
                timeRemaining = 10;
                questionsArr.push(question);
                clearInterval(intervalId);
                clockRunning = false;
                incorrect();
                // question = Math.floor(Math.random() * 8);
                game();
                count++;
                incorrectCount++;
                console.log(count);
            } else {
                var gameHtml = 
                    "<div><h1>GAME OVER!</h1></div>" +
                    "<div><h2>Correct: " + correctCount + "</h2></div>" +
                    "<div><h2>Incorrect: " + incorrectCount +"</h2></div>";
                $("#game").html(gameHtml);
            }
        });
    }

    if (count == 8) {
        $("#game").html("GAME OVER!");
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

