//VARIABLES
var showQuestions = false;
var timer;
var userGuess;
var correct;
var wrong;
var unanswered;
var interval;

var questionsAnswers = [
    {
        question: "What's Roxy's middle name?",
        answers: [
            {name: "Paris Hilton", isCorrect: false},
            {name: "Ivanka Trump", isCorrect: false},
            {name: "Joan Jett", isCorrect: true}
        ]
    },
    {
        question: "What's Roxy's favorite time of day?",
        answers: [
            {name: "Ear cleaning time", isCorrect: false},
            {name: "Breakfast time", isCorrect: true},
            {name: "Toothbrushing time", isCorrect: false}
        ]
    },
    {
        question: "Who is Roxy's favorite supreme court justice?",
        answers: [
            {name: "Neil Gorsuch", isCorrect: false},
            {name: "Ruth Bader Ginsburg", isCorrect: true},
            {name: "Clarence Thomas", isCorrect: false}
        ]
    },
    {
        question: "What is Roxy's favorite song?",
        answers: [
            {name: "'Roxanne' by the Police", isCorrect: true},
            {name: "'Every Breath You Take' by the Police", isCorrect: false},
            {name: "'Don't Stand So Close to Me' by the Police", isCorrect: false}
        ]
    },
    {
        question: "What's Roxy's favorite pastime?",
        answers: [
            {name: "Baseball", isCorrect: false},
            {name: "Coding", isCorrect: false},
            {name: "Peanut butter", isCorrect: true}
        ]
    },
    {
        question: "Who's Roxy's favorite musician?",
        answers: [
            {name: "Cashmere Cat", isCorrect: false},
            {name: "A Flock of Seagulls", isCorrect: false},
            {name: "Bone Thugs-n-Harmony ", isCorrect: true}
        ]
    }
]

//FUNCTIONS
//start button functionality - starts timer counting down
function startGame(){
    timer = 60
    correct = 0
    wrong = 0
    unanswered = 0
    $("#timeRemaining").show();
    $("#startButton").show();
    $("#resultsCard").hide();
    $("#badJob").hide();
    $("#okJob").hide();
    $("#goodJob").hide();
    $("#questionsCard").hide();
    $("#results").empty();
}

//timer counts down
function countDown(){
    if(timer >= 1){
        $("#timer").text(--timer);
        }
    else{
        clearInterval(interval);
        gradeAnswers();
    }
}

//writes the question and answer to the element questionScreen
function listQuestions(){
    $("#questionScreen").empty();
    for (var questionInfo of questionsAnswers) {
        $("#questionScreen").append(createSingleQuestion(questionInfo));
    }
}

//returns question from questionInfo and creates element for answers to go into
function createSingleQuestion(question){
    var questionContainer = $("<div>");
    var questionPrompt = $("<p>").text(question.question);
    var answers = $("<div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">");

    for (var answerInfo of question.answers) {
        answers.append(createSingleButton(question, answerInfo));
    }

    questionContainer.append(questionPrompt, answers);

    return questionContainer;
}

//returns the name property of the answer array in questionsAnswers - sets userGuess value
function createSingleButton(question, answer) {
    return $("<label class=\"btn btn-secondary\">")
        .click(function(){
            question.hasCorrectAnswer = answer.isCorrect;
        })
        .text(answer.name)
        .append(
            $("<input type=\"radio\" name=\"options\" autocomplete=\"off\">")
        );
}

function gradeAnswers(){
    for(var questionInfo of questionsAnswers){
        if(questionInfo.hasCorrectAnswer === true){
            correct++;
        }
        else if(questionInfo.hasCorrectAnswer === false){
            wrong++;
        }
        else{
            unanswered++;
        }
        delete questionInfo.hasCorrectAnswer;
    }
    clearInterval(interval);
    resultsScreen();
}

//endScreen displays number correct, incorrect, and unanswered
function resultsScreen(){
    $("#timeRemaining").hide();
    $("#questionsCard").hide();
    $("#resultsCard").show();
    $("#correct").text(correct);
    $("#wrong").text(wrong);
    $("#unanswered").text(unanswered);
    if(correct < 3){
        $("#badJob").show();
    }
    else if(correct === 3 || correct === 4){
        $("#okJob").show();
    }
    else{
        $("#goodJob").show();
    }
}

//EVENTS
$("#startButton").click(function(){
    showQuestions = true;
    $("#startButton").hide();
    $("#questionsCard").show();
    $("#timer").text(timer);
    interval = setInterval(countDown, 1000);
    listQuestions();
})

$("#submit").click(gradeAnswers);

$("#playAgainButton").click(startGame);

startGame();








