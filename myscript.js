// This code will fade in the h1 element when the page loads.

var h1 = document.getElementById("myH1");

h1.onLoad = function() {
  this.style.opacity = 0;
  var i = 0;
  var interval = setInterval(function() {
    i++;
    h1.style.opacity = i / 10;
    if (i === 10) {
      clearInterval(interval);
    }
  }, 100);
};
