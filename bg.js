chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && window.localStorage.getItem(tab.url) != null) {
		chrome.tabs.update(tab.id, {url: "mathscreen.html"});
	}
});

function redirect() {
	location.replace("google.com");
}