// $("body")

// selecting elements with jQuery
// $("p")

// using document.ready
// $(document).ready(function() {
// 	console.log("I'm ready!");
// });

// anonymous function.... why isnt it working in console, i get an error??
// function(){
// 	alert("I am anonymous!");
// }
// var my_anon_func = function() { alert("HAR!");}


// callback example
// var myFunction = function(){ alert("hello, how are you?");}

// function someOtherFunction(anyFunction) {console.log(3+3); anyFunction();}

// someOtherFunction(myFunction);

// $("body").show();

// does not look like its fadng in 
// $("#fading").fadeIn(8000);

// why doesnt this work??
// function greet(name) {
// 	console.log("Hello, my name is " + name);
// }

// var someName = "Bob";

// function sayName(name) {
// 	console.log(name);
// }
// sayName (someName);
// greet (someName);
// the greet is not working, says not defined. how do I do that? 


// unsure why this doesnt seem to be working either?
function toggleContent() {
	$("#main-content").slideToggle();
}

function toggleDivClasses() {
	$("div").toggleClass("special-content");
}

$("#toggle-content").click(function() {
	$("#main-content").slideToggle();
});

$("#toggle-content").hover(function() {
	console.log("hovered over the button");
});

$("#fade-out").click(function() {
	$("#main-content").fadeOut("slow", function() {
		console.log("Coming back");
		$("main-content").fadeIn();
	});
})