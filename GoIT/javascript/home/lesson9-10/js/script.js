$(function () {

// carousel code (not a plugin)
	var first = $('.jcarousel-list li').first();
	var last = $('.jcarousel-list li').last();
	var ignore = false;	

	$('.jcarousel-next').click(function(event) {
		
		event.preventDefault();
		if(ignore){							
			return;
		};
		ignore = true;

		if ($('.active')[0] === last[0]) {
			
			console.log('active', active)
			var temp = $('.active').detach();
			temp.prependTo(".jcarousel-list");

			last = $('.jcarousel-list li').last();

			$('.jcarousel-list').children('*:not(.active)').css({
					'left': '700px'
				});
		};

		// var currentButton = $('.active-button');
		// var nextButton = $('.active-button').next().addClass('active-button');
		// currentButton.removeClass('active-button');

		var next = $('.active').next();
		var active = $('.active').add(next);
	
		
	    active.animate({
	    	left: "-=700"
	    }, 900, function(){
	    	ignore = false;
	    }); 


	    active.removeClass('active');
		next.addClass('active');
	});
		
	$('.jcarousel-prev').click(function(event) {

		event.preventDefault();
		if(ignore){							
			return;
		};
		ignore = true;

		if ($('.active')[0] === first[0]) {
			
			var temp = $('.active').detach();
			temp.appendTo(".jcarousel-list");

			first = $('.jcarousel-list li').first();

			$('.jcarousel-list').children('*:not(.active)').css({
					'left': '-700px'
				});
		};

		var prev = $('.active').prev();
		var active = $('.active').add(prev);
	    active.animate({
	    	left: "+=700"
	    }, 900, function(){
	    	ignore = false;
	    });

	    active.removeClass('active');
		prev.addClass('active');
	});

//selectBox plugin initialization

	var select = $('select').selectBox();
	
	console.log(select);

// checkBox plugin init

	$('input').iCheck({
    checkboxClass: 'icheckbox_square-grey',
    radioClass: 'iradio_square-grey',
    increaseArea: '20%' // optional
  });
});
