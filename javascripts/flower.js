var count = 0; // The number of dots in the flower

var dot_top = 0;
var dot_left = 0;

$(window).click(function() {
	// $(".dot").css("left", window_width/2);
	// $(".dot").css("top", window_height/2);
	$("#dots").append('<div class="dot" id="' + count +'"></div>')
	grow(count);
	count += 1;
});

function grow(n){
	// Moves the nth dot
	var angle = 0;
	var distance = 0;
	
	angle = n * (720 - 360 * 1.61803399);
	distance = n * 2;
	
	// Calculate the new position of the nth dot, 
	// rembering that the angle rotates clock-wise from the y-axis.
	with (Math) {
		dot_top = cos(angle) * distance;
		dot_left = sin(angle) * distance;
	}
	$(".dot#" + n).css("top", dot_top + window.innerHeight / 2);
	$(".dot#" + n).css("left", dot_left + window.innerWidth / 2);
	// alert(angle);
	if (n == 0) {
		// Create a new dot at the origin
	}
	else {
		grow(n - 1);
	}
};