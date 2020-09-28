var questions = [{
    question: "Anjali Anjali",
    choices: ["Kaadhalan", "Duet", "Gentleman"],
    correctAnswer: 1
}, {
    question: "Thendral Vanthu",
    choices: ["Avathaaram", "Marupadiyum", "Chinnathambi"],
    correctAnswer: 0
}, {
    question: "Ilaya Nila",
    choices: ["Alaigal Ozhivathillai", "Sindhubhairavi", "Payanangal Mudivathillai"],
    correctAnswer: 2
}, {
    question: "Pachai Nirame",
    choices: ["En swaasa kaatre", "Minsaarakanavu", "Alaipaayuthe"],
    correctAnswer: 2
}, {
    question: "Narumugaye",
    choices: ["Iruvar", "Keladi Kanmani", "Thiruda Thiruda"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();    
}

function hideScore() {
    $(document).find(".result").hide();
}

function displayCurrentQuestion() {
    
    console.log("In display current question");
    //$(document).find(".quizMessage").text(currentQuestion);
    //$(document).find(".quizMessage").show();
    
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    
    //set the questionclass text to current question
    $(questionClass).text(question);
    
    //remove all current li elements
    $(choiceList).find("li").remove();
    
    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio"> ' + choice + '</li>').appendTo(choiceList);
    }
}


$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            var value = $("input[type='radio']:checked").val();
            console.log(value);
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }  
            {
                //$(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers = correctAnswers + 1;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Try Again?");
                    quizOver = true;
                }
                
            }
            
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});


