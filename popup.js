chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
	localStorage.setItem(tab.url.toString());
});