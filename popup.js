chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
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