function eventListener() {
	var questionInput = document.getElementById("question-input")

	questionInput.addEventListener('keypress', function(e){
		if (e.keyCode === 13){
			var hankSays = document.getElementById("hank-says")
			hankSays.innerText = "I'm not sure, but give me a treat!"
			questionInput.value = ""
		}
	})
}