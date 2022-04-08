$(document).ready(function() {
	$('article.1').hover(function(){
		$('img.stretch1').css('height', '180px');
	}, function() {
		$('img.stretch1').css('height', '200px');
	});

	$('article.2').hover(function(){
		$('img.stretch2').css('height', '180px');
	}, function() {
		$('img.stretch2').css('height', '200px');
	});

	$('article.3').hover(function(){
		$('img.stretch3').css('height', '180px');
	}, function() {
		$('img.stretch3').css('height', '200px');
	});

	$('article.4').hover(function(){
		$('img.stretch4').css('height', '180px');
	}, function() {
		$('img.stretch4').css('height', '200px');
	});

	$('article.5').hover(function(){
		$('img.stretch5').css('height', '180px');
	}, function() {
		$('img.stretch5').css('height', '200px');
	});

	$('article.6').hover(function(){
		$('img.stretch6').css('height', '180px');
	}, function() {
		$('img.stretch6').css('height', '200px');
	});
});

function myfunction() {
	window.prompt("Type your e-mail");
}

function myFun() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

