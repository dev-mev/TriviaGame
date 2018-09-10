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
    }
]

//FUNCTIONS
//start button functionality - starts timer counting down
function startGame(){
    timer = 120
    correct = 0
    wrong = 0
    unanswered = 0
    $("#startButton").show();
    $("#resultsCard").hide();
    $("#badJob").hide();
    $("#goodJob").hide();
    $("#questionsCard").hide();
    $("#startButton").click(function(){
        showQuestions = true;
        $("#startButton").hide();
        $("#questionsCard").show();
        $("#timer").text(timer);
        interval = setInterval(countDown, 1000);
        listQuestions();
    })
}

//timer counts down
function countDown(){
    if(timer >= 1){
        $("#timer").text(--timer);
        }
    else{
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

$("#submit").click(function(){
gradeAnswers();
})

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
    }
    clearInterval(interval);
    resultsScreen();
}

function resultsScreen(){
    $("#questionsCard").hide();
    $("#resultsCard").show();
    $("#results").prepend("<h1>" + "RESULTS");
    $("#results").append("<p>" + "Answers correct: " + correct);
    $("#results").append("<p>" + "Answers wrong: " + wrong);
    $("#results").append("<p>" + "Unanswered: " + unanswered);
    if(correct <= 2){
        $("#badJob").show();
    }
    else{
        $("#goodJob").show();
    }
}

$("#reset").click(function(){
    startGame();
    })
//EVENTS
startGame();




//log answer choices

//endScreen displays number correct, incorrect, and unanswered


// for (var questionInfo of questionsAnswers) {
//     console.log(questionInfo.question);

//     for (var answerInfo of questionInfo.answers) {
//         console.log("> " + answerInfo.name);
//     }
// }




// $("body").append(
// 	$("<div>")
// 		.addClass("btn-group btn-group-toggle")
// 		.attr("data-toggle", "buttons")
// 		.append(
// 			$("<label>")
// 				.addClass("btn btn-secondary")
//                 .click(function () { console.log("you clicked me!"); })
//                 .text(questionsAnswers[i].answers[a].name)
// 				.append(
// 					$("<input>")
// 						.attr("type", "radio")
//                         .attr("name", "options")
//                         .attr("id", "option1")
// 						.attr("autocomplete", "off")
// 				)
// 		)
// 		.append(
// 			$("<label>")
// 				.addClass("btn btn-secondary")
//                 .click(function () { console.log("you clicked me!"); })
//                 .text("Radio button 2")
// 				.append(
// 					$("<input>")
// 						.attr("type", "radio")
// 						.attr("name", "options")
// 						.attr("autocomplete", "off")
// 				)
// 		)
// 		.append(
// 			$("<label>")
// 				.addClass("btn btn-secondary")
//                 .click(function () { console.log("you clicked me!"); })
//                 .text("Radio button 3")
// 				.append(
// 					$("<input>")
// 						.attr("type", "radio")
// 						.attr("name", "options")
// 						.attr("autocomplete", "off")
// 				)
// 		)
//     );