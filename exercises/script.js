// alert("working");

var currently_test = "none";

window.onload = function(event){
	var one = document.getElementById("div_1");
	var two = document.getElementById("div_2");
	var three = document.getElementById("div_3");
	var four = document.getElementById("div_4");
	var five = document.getElementById("div_5");
//	var current = document.getElementById("currently_clicked");
	var prev = document.getElementById("previously_clicked");

//	current.style.backgroundColor = "beige";

	one.onclick = function(event) {
		// alert(one.innerHTML);
//		prev.innerHTML = current.innerHTML;
//		current.innerHTML = one.innerHTML;
		prev.innerHTML = currently_test;
		currently_test = one.innerHTML;
		one.style.backgroundColor = "teal";
		one.style.color = "white";
		one.style.fontStyle = "italic";
	}
	two.onclick = function(event) {
		// alert(two.innerHTML);
		// prev.innerHTML = current.innerHTML;
		// current.innerHTML = two.innerHTML;
		prev.innerHTML = currently_test;
		currently_test = two.innerHTML;		
		two.style.backgroundColor = "teal";
		two.style.color = "white";
		two.style.fontStyle = "italic";
	}
	three.onclick = function(event) {
		// alert(three.innerHTML);
		// prev.innerHTML = current.innerHTML;
		// current.innerHTML = three.innerHTML;
		prev.innerHTML = currently_test;
		currently_test = three.innerHTML;		
		three.style.backgroundColor = "teal";
		three.style.color = "white";
		three.style.fontStyle = "italic";
	}

	four.onclick = function(event) {
		// alert(four.innerHTML);
		// prev.innerHTML = current.innerHTML;
		// current.innerHTML = four.innerHTML;
		prev.innerHTML = currently_test;
		currently_test = four.innerHTML;		
		four.style.backgroundColor = "teal";
		four.style.color = "white";
		four.style.fontStyle = "italic";
	}
	five.onclick = function(event) {
		// alert(five.innerHTML);
		// prev.innerHTML = current.innerHTML;
		// current.innerHTML = five.innerHTML;
		prev.innerHTML = currently_test;
		currently_test = three.innerHTML;		
		five.style.backgroundColor = "teal";
		five.style.color = "white";
		five.style.fontStyle = "italic";
	}		
}