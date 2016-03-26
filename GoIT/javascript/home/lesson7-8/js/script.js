$(function() {


	//toggling tabs

	var $tabs = $(".tabs p");
	var $links = $("li");
	$tabs.hide();
	$tabs.first().show();
	

	function toggleTab(event){

		event.preventDefault();

		var index = $(this).index();
		$tabs.hide();
		$tabs.eq(index).show();
		$links.removeClass("activeTab");
		$links.eq(index).addClass("activeTab");

	}
	$links.on('click', toggleTab);

	//form block

	var $formblock = $("form input");
	$formblock.hover( function(){
		var title = $(this).attr('title');

		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
		
		//positioning of tooTip

		var toolTipPosition = $(this).position();
		$('.tooltip').css({ 

        	top: toolTipPosition.top, 
        	left: toolTipPosition.left + 230
        })
	},

	function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
});
});