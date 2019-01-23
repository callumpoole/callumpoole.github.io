
var skipIds = ["#intro", "#about", "#portfolio", "#contact"];

$(window).scroll(function() { 
	var currentScroll = $(window).scrollTop();
	var h = $(window).height(); 
	
	//Move arrows 
    if (currentScroll >= h) {
        $('.fixNavArrows').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {
        $('.fixNavArrows').css({
            position: 'absolute',
			top: '100vh' 
        });
    }
	
	//Change button functions
	var csR = Math.round(currentScroll);
	for (var i = 1; i <= 4; i++){
		if (Math.abs(i*h - csR) < 2.5){
			csR = i*h;
			break;
		}
	}
	if (csR <= h) {
		$('#arrUp'  ).attr('href',skipIds[0]); 
	} else if (csR <= 2*h) {
		$('#arrUp'  ).attr('href',skipIds[1]); 
	} else if (csR <= 3*h) {
		$('#arrUp'  ).attr('href',skipIds[2]); 
	} else if (csR <= 4*h) {
		$('#arrUp'  ).attr('href',skipIds[3]); 
	} 
	if (csR < h) { 
		$('#arrDown').attr('href',skipIds[1]);
	} else if (csR < 2*h) { 
		$('#arrDown').attr('href',skipIds[2]);
	} else if (csR < 3*h) { 
		$('#arrDown').attr('href',skipIds[3]);
	} else if (csR < 4*h) { 
		$('#arrDown').attr('href',skipIds[4]);
	}
	
	
	//Dull Text
	if (currentScroll >= h*1.2) {
        $('.sideBan1').css({ 
            opacity: '0.3'
        });
    } else {
        $('.sideBan1').css({ 
			opacity: '1'
        });
    }
});