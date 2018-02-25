website = "*://google.ca/*";
website2 = "*://www.google.ca/*";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: chrome.extension.getURL("mathscreen.html")};
    },
    {
        urls: [
            website,
            website2
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
