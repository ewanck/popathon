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
    
//    Webcam.attach("#webcam-view");

    var webcam_video = Popcorn("#webcam-video");

    var webcam_sound = false;

    webcam_video.on("loadedmetadata", function() {
	webcam_video.mute();
	webcam_video.play('75');
    });

    var browser_view = Popcorn("#browser-view");
//    browser_view.currentTime(20);
    browser_view.on("loadedmetadata", function() {
	browser_view.play('66.5');
    });

    $("#mic-button").click(function() {
	if(webcam_sound == false) {
	    webcam_video.unmute();
	    webcam_sound = true;
	} else {
	    webcam_video.mute();
	    webcam_sound = false;
	}
    })

    $(".sidebar-button").click(function() {
	$(".sidebar-container").css("display","none");
	id = "#" + $(this).attr("data-cont");
	$(id).toggle("fade");
    });
});