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
	var opDisp = document.getElementById("operator_display");


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












}
