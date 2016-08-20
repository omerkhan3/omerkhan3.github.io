$(document).ready(function(){
	$('#item').mouseover(function(){
		$('#item').css('background-color', '#C0C0C0');
		
		
	});
	
	

	$('#item').mouseout(function() {
				$('#item').css('background-color', 'white');

	});
	
	
	$('.Twitter').mouseover(function(){
		$('.Twitter').css('background-color', '#14171a');
		$('.socialmedia2_header').css('color', 'white');
		
	});
	
	$('.Twitter').mouseout(function(){
		$('.Twitter').css('background-color', '#9099A2');
		$('.socialmedia2_header').css('color', 'black');
		
	});
	
	$('.GitHub').mouseover(function(){
		$('.GitHub').css('background-color', '#999999');
		
		
	});
	
	

	$('.GitHub').mouseout(function() {
				$('.GitHub').css('background-color', '#9099A2');

	});
	
	$('.LinkedIn').mouseover(function(){
		$('.LinkedIn').css('background-color', '#0077b5');
		
		
	});
	
	$('.LinkedIn').mouseout(function(){
		$('.LinkedIn').css('background-color', '#9099A2');
		
		
	});
	$('.FaceBook').mouseover(function(){
		$('.FaceBook').css('background-color', '#3b5998');
		$('.socialmedia4_header').css('color', 'white');

		
	});
	
	$('.FaceBook').mouseout(function(){
		$('.FaceBook').css('background-color', '#9099A2');
		$('.socialmedia4_header').css('color', 'black');

		
	});
	
	
});