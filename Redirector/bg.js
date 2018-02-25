/* Past programming attempt
var host = "file:///C:/Users/Thomas%20Ma/Documents/ChromeExtensions/HTV2/Redirector/mathscreen.html";
//var website = ["*://google.ca/*", "*://www.google.ca/*"];
//website2 = "*://www.google.ca/*"
//var web1 = website.indexOf("*://facebook.com/*");
//var index  = 0;

//while (index < website.length) {
  //  alert(document.URL);
  //chrome.webRequest.onBeforeRequest.addListener( //redirects the user to the HTML page for NumLock
    //function(details) {
      //   return {redirectUrl: chrome.extension.getURL("mathscreen.html")}; //redirection
    //},
      //  {
        //    urls: [ //url list
          //      website[index], website[index+1]
            //website2
            //],
            //types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
        //},
        //["blocking"]
   // );  
  //index = index + 2;
}
*/

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
