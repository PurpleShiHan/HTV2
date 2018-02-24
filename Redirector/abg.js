var host = "file:///C:/Users/Thomas%20Ma/Documents/ChromeExtensions/HTV2/Redirector/mathscreen.html";
var website = ["*://google.ca/*", "*://www.google.ca/*", "*://facebook.com/*", "*://www.facebook.com/*"];
//website2 = "*://www.google.ca/*"
//var web1 = website.indexOf("*://facebook.com/*");
var index = 0;
alert(index);


while (index != -1) {
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: chrome.extension.getURL("mathscreen.html")};
    },
        {
            urls: [
                website[index], website[index+1]
            //website2
            ],
            types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        },
        ["blocking"]
    );  
  index = index + 2;
}
