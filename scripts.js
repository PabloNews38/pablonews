$(document).ready(function(){
	$('.notify-single-icon.close').on('click', function(){
		$(this).parent('.notify-single').remove();
	});
});