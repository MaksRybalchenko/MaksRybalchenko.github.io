$(function() {

	function scrollOnTop(){
		$("html, body").animate({ scrollTop: 0 }, 600);
    	return false;
	}
	
	$(".scrollOnTop").on('click', scrollOnTop);
	$("a[rel*=leanModal]").leanModal();

});