chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && checkBlacklisted(tab.url)) {
		window.localStorage.setItem("lastBannedSite", tab.url);
		chrome.tabs.update(tab.id, {url: "index.html"});
	}
});

function checkBlacklisted(ster) {
/* 	alert(window.localStorage.length);
	alert(window.localStorage.getItem("banSites"));
	alert((window.localStorage.getItem("banSites") == true) || (window.localStorage.getItem("banSites") == null).toString() + "hi"); */
	if ((window.localStorage.getItem("banSites") == true) || (window.localStorage.getItem("banSites") == null)) {
		for (var i=0; i < window.localStorage.length; i++) {
/*  			alert(window.localStorage.key(i));
			alert(ster.includes(window.localStorage.key(i)));
			alert(window.localStorage.getItem(window.localStorage.key(i)) == "blocked site");  */
			if (ster.includes(window.localStorage.key(i)) && window.localStorage.getItem(window.localStorage.key(i)) == "blocked site") {
				return true;
			}
		}
	}
	return false;
} 

/* var History = {};

chrome.browserAction.setBadgeText({ 'text': '?'});
chrome.browserAction.setBadgeBackgroundColor({ 'color': "#777" });

function Update(t, tabId, url) {
  if (!url) {
    return;
  }
  if (tabId in History) {
    if (url == History[tabId][0][1]) {
      return;
    }
  } else {
    History[tabId] = [];
  }
  History[tabId].unshift([t, url]);

  var history_limit = parseInt(localStorage["history_size"]);
  if (! history_limit) {
    history_limit = 23;
  }
  while (History[tabId].length > history_limit) {
    History[tabId].pop();
  }

  chrome.browserAction.setBadgeText({ 'tabId': tabId, 'text': '0:00'});
  chrome.browserAction.setPopup({ 'tabId': tabId, 'popup': "popup.html#tabId=" + tabId});
}

function HandleUpdate(tabId, changeInfo, tab) {
  Update(new Date(), tabId, changeInfo.url);
}

function HandleRemove(tabId, removeInfo) {
  delete History[tabId];
}

function HandleReplace(addedTabId, removedTabId) {
  var t = new Date();
  delete History[removedTabId];
  chrome.tabs.get(addedTabId, function(tab) {
    Update(t, addedTabId, tab.url);
  });
}

function UpdateBadges() {
  var now = new Date();
  for (tabId in History) {
    var description = FormatDuration(now - History[tabId][0][0]);
    chrome.browserAction.setBadgeText({ 'tabId': parseInt(tabId), 'text': description});
  }
}

setInterval(UpdateBadges, 1000);

chrome.tabs.onUpdated.addListener(HandleUpdate);
chrome.tabs.onRemoved.addListener(HandleRemove);
chrome.tabs.onReplaced.addListener(HandleReplace); */