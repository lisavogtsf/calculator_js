// alert("javascript is working");
window.onload = function() {
	var one = document.getElementById("oneButton");
	var two = document.getElementById("twoButton");
	var three = document.getElementById("threeButton");
	var four = document.getElementById("fourButton");
	var five = document.getElementById("fiveButton");
	var six = document.getElementById("sixButton");
	var seven = document.getElementById("sevenButton");
	var eight = document.getElementById("eightButton");
	var nine = document.getElementById("nineButton");			
	var zero = document.getElementById("zeroButton");

	// when numbers are clicked, the show up here
	// when enter is clicked these numbers are stored 
	var opDisp = document.getElementById("operator_display");

	//results appears after you hit enter
	var resultDisp = document.getElementById("result_display_value");
	var enter = document.getElementById("ent");

	// when an operator is punched, the display is cleared
	// and that information is stored for future stuff
	var plus = document.getElementById("plus");


	one.onclick = function(event) {
		console.log("oneButton");
		opDisp.innerHTML += one.innerHTML;

	}
	two.onclick = function(event) {
		console.log("twoButton");
		opDisp.innerHTML += two.innerHTML;

	}
	// three.onclick = function(event) {
	// console.log("threeButton");

	// }
	four.onclick = function(event) {
		console.log("fourButton");
		opDisp.innerHTML += four.innerHTML;
	}
	// five.onclick = function(event) {
	// console.log("fiveButton");

	// }
	// six.onclick = function(event) {
	// console.log("sixButton");

	// }
	// seven.onclick = function(event) {
	// console.log("sevenButton");

	// }
	// eight.onclick = function(event) {
	// console.log("eightButton");

	
	// }
	// nine.onclick = function(event) {
	// console.log("nineButton");

	
	// }
	// zero.onclick = function(event) {
	// 	console.log("zeroButton");
		
	// }



	while ()








}
