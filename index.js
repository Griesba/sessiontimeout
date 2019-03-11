// Get the modal
var modal = document.getElementById('id01');

// Get the button that opens the modal
var btn = document.getElementById("myButton");

var closeButton = document.getElementById("closeButton");

var count = 0;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var timerPeriod = 10000;

var callback = function() {
	console.log("Hello");
}

var timer = new Timer(callback, timerPeriod);

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  timer.restart(timerPeriod);
  
}


myFunction = function () {
	modal.style.display = "block";
	/*setInterval(function () {
		modal.style.display = "block";
	}, 10000);*/
	
	timer.start();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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