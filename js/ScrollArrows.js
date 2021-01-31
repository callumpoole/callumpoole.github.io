
var skipIds = ["#intro", "#about", "#portfolio", "#contact"];

$(window).scroll(function() { 
	var currentScroll = $(window).scrollTop();
	var h = $(window).height(); 
	
	//Move arrows 
    if (currentScroll >= h) {
        $('#fixedNavArrows').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('#fixedNavArrows').css({
            position: 'absolute',
			top: '100vh' 
        });
    }
	
	//Change button functions
	var scrollRounded = Math.round(currentScroll);
	const closeTo = 2.5;

	$('#arrUp'  ).attr('href',skipIds[Math.floor((scrollRounded - closeTo) / h)]); 
	$('#arrDown').attr('href',skipIds[Math.ceil ((scrollRounded + closeTo) / h)]); 
});