var answers = [];
var answersCorrect = 0;

  function makeProblems() {
  document.getElementById("startButton").style.visibility = "hidden";
  questionTimer();
  answers = [];
  for (i=0; i < 12; i++) {
	var x = Math.floor((Math.random() * 10) + 1);
	var y = Math.floor((Math.random() * 10) + 1);
	document.getElementById("demo " + (i+1).toString()).innerHTML = x.toString() + " &times; " + y.toString();
	answers.push(x*y);
document.getElementById("answer " + (i+1).toString()).style.visibility = "hidden";
document.getElementById("text " + (i+1).toString()).value = "";
  }
  
  }
  function showAnswer(x){
	var allRight = true;
	for (i=0; i< 12; i++) {
	  document.getElementById("answer "+(i+1).toString()).style.visibility = "visible";
	  document.getElementById("answer "+(i+1).toString()).innerHTML = answers[i];
	  var isEqual = (document.getElementById("text "+(i+1).toString()).value == answers[i].toString());
	  if (!isEqual) {
		document.getElementById("answer "+(i+1).toString()).style.color = "red";
		allRight = false;
	  }
	  else{
		document.getElementById("answer "+(i+1).toString()).style.color = "green";
	  }
	}
	if (x==true) {
		document.getElementById("ranOutOfTime").style.display = "none";
		if (allRight) {
			document.getElementById("questionsStatus").innerHTML = "You succeeded!";
			var now = new Date().getTime();
			answersCorrect = 1;
			window.localStorage.setItem("timer", now + 12000);
			window.localStorage.setItem("banSites", false);
			wait(2000);
			goToBannedSite();
		} else {
			document.getElementById("questionsStatus").innerHTML = "One or more questions are wrong.";
			answersCorrect = -1;
			punishmentTimer();
		}
	  }
  }

function questionTimer() {
  // Get todays date and time
  var now = new Date().getTime();
  // Set the date we're counting down to
  var countDownDate = now + 60000;

  // Update the count down every 1 second
  var x = setInterval(function() {
	  var new_now = new Date().getTime();
	  // Find the distance between now an the count down date
	  var distance = countDownDate - new_now;

	  // Time calculations for days, hours, minutes and seconds
	  var seconds = Math.floor((distance) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("ranOutOfTime").innerHTML = seconds + "s ";

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		showAnswer(false);
		document.getElementById("ranOutOfTime").innerHTML = "You ran out of time!";
		if (answersCorrect == 0) {
		  answersCorrect = -1;
		  punishmentTimer();
		}
	  }
}, 1000);
}

function punishmentTimer() {
  document.getElementById("pTimer").style.visibility = "visible";
  // Get todays date and time
  var now = new Date().getTime();
  // Set the date we're counting down to
  var countDownDate = now + 300000;
  
  var x = setInterval(function() {
	  var new_now = new Date().getTime();
	  // Find the distance between now an the count down date
	  var distance = countDownDate - new_now;

	  // Time calculations for days, hours, minutes and seconds
	  var seconds = Math.floor((distance) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("pTimer").innerHTML = "You can try again in " + seconds + "s ";

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("pTimer").style.visibility = "hidden";
		document.getElementById("startButton").style.visibility = "visible";
		document.getElementById("startButton").innerHTML = "Try Again";
		answersCorrect = 0;
		}
	}, 1000)
}

function makeProblemsHandler(e) {
  makeProblems();
}

function showAnswerHandler(e) {
  showAnswer(true);
  
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("startButton").addEventListener('click', makeProblemsHandler);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("answerButton").addEventListener('click', showAnswerHandler);
});

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function goToBannedSite() {
	location.replace(window.localStorage.getItem("lastBannedSite"));
}
