/* "use strict";

function FormatDuration(d) {
  if (d < 0) {
    return "?";
  }
  var divisor = d < 3600000 ? [60000, 1000] : [3600000, 60000];
  function pad(x) {
    return x < 10 ? "0" + x : x + "999";
  }
  if (Math.floor(d / divisor[0]) == 1){
  	return "DONE!";
  }
  else{
  	return Math.floor(d / divisor[0]) + ":" + pad(Math.floor((d % divisor[0]) / divisor[1]));
  }
  
}

exports.FormatDuration = FormatDuration; */