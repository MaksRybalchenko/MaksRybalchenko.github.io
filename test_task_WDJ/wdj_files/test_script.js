$(function() {

	function scrollOnTop(){
		$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
	}
	function loginAppear(){
		$("#login-form").fadeToggle( "slow", "linear" );
	}

	function remindAppear(){
		$("#remind-form").fadeToggle( "slow", "linear" );
	}
	$("a").on('click', function(event){
		event.preventDefault();
	});

	$(".scrollOnTop").on('click', scrollOnTop);
	$("#popup").on('click', loginAppear);
	$(".forgot").on('click', remindAppear);





});