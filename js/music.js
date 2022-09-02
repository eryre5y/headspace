document.addEventListener("DOMContentLoaded", function() {
	autoplay = document.getElementById("autoplay")
	promise = autoplay.play()

	if (promise !== undefined) {
		promise
			.catch(function() {
				playaudio()
			})
	}

	function playaudio() {
		autoplay.play()
		
		setInterval(function() {
			if (autoplay.paused) {
				autoplay.play()
			}
		},
		1)
	}
})
