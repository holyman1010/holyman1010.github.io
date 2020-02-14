document.write('<div id="loading"><div class="loader"><div class="prelogo"><img src="images/logoloading.png"></div><img src="images/loader.gif" /></div></div>'); 
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  //document.getElementById("loading").style.display="none";
  $("#loading").delay(500).fadeOut(300,function (){
	    myOpenAnimate();
	  });
});
