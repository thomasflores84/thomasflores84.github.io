// My Scripts
$(document).foundation();

$('#smButt').click(function() {
		makePuzzle(100, this);
	});

$('#medButt').click(function() {
		makePuzzle(60, this);
	});

$('#lgButt').click(function() {
		makePuzzle(40, this);
	});

function makePuzzle (size, object) {
	$("#puzzleDiv").html("<div class='puzzle' style='float: left ; margin-right: 50px ;'><img src='img/doh.jpg'>fsadfs</div>");
	$( "div.puzzle, p" ).puzzle( size );	
	$(object).css("background", "red");	
}