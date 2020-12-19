// SET THIS VARIABLE FOR DELAY, 1000 = 1 SECOND
var delayLength = 4000;
	
function doMove(panelWidth, tooFar) {
	var leftValue = $("#mover").css("left");
	
	// Fix for IE
	if (leftValue == "auto") { leftValue = 0; };
	
	var movement = parseFloat(leftValue, 10) - panelWidth;
	
	if (movement == tooFar) {
		$(".slide img").animate({
			"top": -200
		}, function() {
			$("#mover").animate({
				"left": 0
			}, function() {
				$(".slide img").animate({
					"top": 20
				});
			});
		});
	}
	else {
		$(".slide img").animate({
			"top": -200
		}, function() {
			$("#mover").animate({
				"left": movement
			}, function() {
				$(".slide img").animate({
					"top": 20
				});
			});
		});
	}
}

$(function(){
	
    var $slide1 = $("#slide-1");

	var panelWidth = $slide1.css("width");
	var panelPaddingLeft = $slide1.css("paddingLeft");
	var panelPaddingRight = $slide1.css("paddingRight");

	panelWidth = parseFloat(panelWidth, 10);
	panelPaddingLeft = parseFloat(panelPaddingLeft, 10);
	panelPaddingRight = parseFloat(panelPaddingRight, 10);

	panelWidth = panelWidth + panelPaddingLeft + panelPaddingRight;
	
	var numPanels = $(".slide").length;
	var tooFar = -(panelWidth * numPanels);
	var totalMoverwidth = numPanels * panelWidth;
	$("#mover").css("width", totalMoverwidth);

	$("#slider").append('<a href="#" id="slider-stopper">Stop</a>');

	sliderIntervalID = setInterval(function(){
		doMove(panelWidth, tooFar);
	}, delayLength);
	
	$("#slider-stopper").click(function(){
		if ($(this).text() == "Stop") {
			clearInterval(sliderIntervalID);
		 	$(this).text("Start");
		}
		else {
			sliderIntervalID = setInterval(function(){
				doMove(panelWidth, tooFar);
			}, delayLength);
		 	$(this).text("Stop");
		}
		 
	});

});


// Splitting({
// 	whitespace: true
// })





// new curverd

function circularText(txt, radius, classIndex) {
	txt = txt.split(""),
	  classIndex = document.getElementsByClassName("circTxt")[classIndex];
  
	var deg = 360 / txt.length,
	  origin = 0;
  
	txt.forEach((ea) => {
	  ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
	  classIndex.innerHTML += ea;
	  origin += deg;
	});
  }
  
  circularText("shadow circular text ", 100, 0);
  circularText("cursive in a circle ", 50, 1);
  circularText("*************************", 32, 2);
  circularText("0 1 2 3 4 5 6 7 8 9 ", 75, 3);
  circularText("                                                         ", 90, 4);
  circularText("☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆", 64, 5);