document.addEventListener('DOMContentLoaded', function () {

  //sticky header selector

  var bars = document.querySelectorAll(".stickyBar");
  bars = Array.prototype.slice.call(bars);

  // li items selector for offsetTop method

  var container = document.querySelectorAll(".bar__menu__item"); 
  container = Array.prototype.slice.call(container);
  
  //event handler 

  var runOnScroll =  function(evt) {
    for (var i = 0; i < bars.length; i++) {
      
      var rect = bars[i].getBoundingClientRect().top;
      
      if (rect < 0){
        bars[i].classList.add("fixed__bar");
      }
      else if(window.pageYOffset < container[i].offsetTop){
        bars[i].classList.remove("fixed__bar");
      }
    };

  };

  // event listener

  bars.forEach(function(element) {
    window.addEventListener("scroll", runOnScroll);
  });

});


