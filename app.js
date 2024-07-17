function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros to minutes and seconds if they are less than 10
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Determine if it's AM or PM
  var period = (hours < 12) ? "AM" : "PM";

  // Convert hours from 24-hour to 12-hour format
  hours = (hours > 12) ? hours - 12 : hours;

  // Add leading zero to hours if it's less than 10
  hours = (hours < 10 ? "0" : "") + hours;

  // Display the time in the HTML element with id "clock"
  document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;

  // Update the clock every second
  setTimeout(updateClock, 1000);
}

// Call the updateClock function to start the clock
updateClock();
