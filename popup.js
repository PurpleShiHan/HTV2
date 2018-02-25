chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
	if (window.localStorage.getItem("timer") != null) {	
		blacklistTimer();
	}
});

function blacklistHandler(e){
	chrome.tabs.getSelected(null, function(tab) {
		if (window.localStorage.getItem(tab.url) != null)  {
			document.getElementById("currentLink").innerHTML = "Link already blacklisted!";
		} else {
			window.localStorage.setItem(tab.url, "blocked site");
			document.getElementById("currentLink").innerHTML = "Link blacklisted!";
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("blacklistbutton").addEventListener('click', blacklistHandler);
});

function whitelistHandler(e) {
	chrome.tabs.getSelected(null, function(tab) {
		if (window.localStorage.getItem(tab.url) != null) {
			window.localStorage.removeItem(tab.url);
			document.getElementById("currentLink").innerHTML = "Link removed!";
		} else {
			document.getElementById("currentLink").innerHTML = "Link not blacklisted!";
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("whitelistbutton").addEventListener('click', whitelistHandler);
});

function blacklistTimer() {

  // Update the count down every 1 second
  var x = setInterval(function() {
	  var new_now = new Date().getTime();
	  // Find the distance between now an the count down date
	  var distance = localStorage.getItem("timer") - new_now;

	  // Time calculations for days, hours, minutes and seconds
	  var minutes = Math.floor((distance) / 60000)
	  var seconds = Math.floor(((distance) % 60000) / 1000);

	  // Display the result in the element with id="demo"
	  document.getElementById("timer").innerHTML = "Time left: " + minutes + ":" + seconds;

	  // If the count down is finished, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "0:00";
		window.localStorage.setItem("banSites", true);
		console.log(localStorage.getItem("banSites"));
	  }
}, 1000);
}

function difficultyHandler(e) {
	if ((window.localStorage.getItem("difficulty") == null) || window.localStorage.getItem("difficulty") == "easy") {
		window.localStorage.setItem("difficulty", "hard");
		document.getElementById("difficultybutton").innerHTML = "Hard Mode Enabled!";
	}
	else {
		window.localStorage.setItem("difficulty", "easy");
		document.getElementById("difficultybutton").innerHTML = "Easy Mode Enabled!";
	}
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("difficultybutton").addEventListener('click', difficultyHandler);
});