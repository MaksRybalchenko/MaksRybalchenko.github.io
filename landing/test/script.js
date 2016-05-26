document.addEventListener('DOMContentLoaded', function () {
 
  var bars = document.querySelectorAll(".stickyBar");
  bars = Array.prototype.slice.call(bars);
  var originalTop = [];

  for (var i = 0; i < bars.length; i++) {
    originalTop[i] = bars[i].getBoundingClientRect().top;
  };
  console.log(originalTop);
var runOnScroll =  function(evt) {
  for (var i = 0; i < bars.length; i++) {
    
    var avatarSourceBottom = bars[i].getBoundingClientRect().top + window.pageYOffset;
    var rect = bars[i].getBoundingClientRect();
    if (rect.top < 0){
      bars[i].classList.add("current__fixed__bar");
    }
    else if(window.pageYOffset < originalTop[i] && rect.top === 0){
      bars[i].classList.remove("current__fixed__bar");
    }
  };
    
  console.log(bars);
  
};




bars.forEach(function(element) {
  window.addEventListener("scroll", runOnScroll);
});

});


