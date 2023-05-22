$(document).ready(function(){
	$('.notify-single-icon.close').on('click', function(){
		$(this).parent('.notify-single').remove();
	});
});

let alertShow = false;

setInterval(() => {
	document.title = 
	alertShow ? "PabloNews"
			  : "Recrute !";
			  
	alertShow = !alertShow;
}, 5000);