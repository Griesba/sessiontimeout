// Get the modal
var modal = document.getElementById('id01');


var loginBtn = document.getElementById("loginBtn");

var closeButton = document.getElementById("closeButton");

var count = 0;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var timerPeriod = 60000;

var callback = function() {
	myFunction();
	console.log("Hello");
}

var timer = new Timer(callback, timerPeriod);



loginBtn.onclick = function () {
	document.getElementById('id01').style.display='block';
	timer.stop();
}

myFunction = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
	timer.restart(timerPeriod);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	timer.restart(timerPeriod);
  }
}


function Timer(fn, period) {

	var myInterval; 
	
	this.stop = function() {
		if(myInterval) {
			clearInterval(myInterval);
			myInterval = null;
		}
		return this;
	}
	
	this.start = function() {
		if(!myInterval) {
			myInterval = setInterval(fn, period)
		}
		return this;
	}
	
	this.restart = function (newPeriod) {
		period = newPeriod;		
		
		return this.stop().start();
	}
}


myFunction();