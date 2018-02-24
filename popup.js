chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('currentLink').innerHTML = tab.url;
    chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
      console.log('Settings saved');
    });
});