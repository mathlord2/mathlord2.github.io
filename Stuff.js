function startTime() {
	var today = new Date(); //gets the date
  var a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //gets the month as a word
  var b = today.getDate(); //gets the day
  var c = today.getFullYear(); //gets the year
	var h = today.getHours(); //gets the hour
	var m = today.getMinutes(); //gets the minute
	var s = today.getSeconds(); //gets the second
	var z = "am"

	if  (h >= 12) {
		z = "pm"; //change to pm after noon
	}

	if (h > 12) {
		h -= 12; //time is in pm
	}

	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('date').innerHTML = a[today.getMonth()] + " " + b + ", " + c + " " + h + ":" + m + ":" + s + " " + z;
	var t = setTimeout(startTime, 500);
	}

	function checkTime(i){
		if (i < 10) {i = "0" + i};
		return i;
	}