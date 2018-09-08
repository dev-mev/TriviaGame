//VARIABLES
var showQuestions = false
var timer

//FUNCTIONS
function hideButton(){
    if(showQuestions){
        $("#questionScreen").show();
        $("#startButton").hide();
    }
}  

//start button functionality - starts timer counting down
function startGame(){
    timer = 100
    $("#questionScreen").hide();
    $("#startButton").click(function(){
        showQuestions = true;
        hideButton();
        $("#timer").text(timer);
        setInterval(countDown, 1000);
    })
}

function countDown(){
    $("#timer").text(--timer);
}



//timer
// timeConverter: function(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);

//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }

//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }

//     return minutes + ":" + seconds;
//   }
// };

//EVENTS
startGame();


//store questions and answers

//log answer choices

//endScreen displays number correct, incorrect, and unanswered