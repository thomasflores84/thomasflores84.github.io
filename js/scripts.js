// My Scripts
$(document).foundation();

$('#smButt').click(function() {
		makePuzzle(91, this);
		$(".puzzle").css("background-color", "black");
	});

function makePuzzle (size, object) {
	$("#puzzleDiv").html("<div class='puzzle column small-centered small-6'><img src='img/lost.jpg'></div>");
	$( "div.puzzle, p" ).puzzle( size );	
	$(object).css("background", "red");	
}