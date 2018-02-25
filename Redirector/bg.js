var host = "file:///C:/Users/Thomas%20Ma/Documents/ChromeExtensions/HTV2/Redirector/mathscreen.html";
var website = ["*://youtube.com/*", "*://www.youtube.com/*","*://google.ca/*", "*://www.google.ca/*"];
var ind = 0;
while ( (ind<website.length) && (ind!=-1)){
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: chrome.extension.getURL("mathscreen.html")};
    },
    {
        urls: [
            website[ind],
            website[ind+1]
        ],
   //     types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
ind = ind + 2;
}
