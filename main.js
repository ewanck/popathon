$(document).ready(function() {
    $("#start-button").click(function() {
	$("#start-button").toggle("fade");
	$("#roulette-container").toggle("fade");
	$("#roulette-content").animate({
	    top:-60,
	},3000, function() {
	    $("#target").css("color","green");
	});
    });

    $("#camera-button").click(function() {
	$("#webcam-view").toggle("fade");
    })
});