define([
	'seriously',
	'app/shader'
	// 'components/seriouslyjs/effects/seriously.sepia'
], function(Seriously, shader){
		var seriously, // the main object that holds the entire composition
			gUM, // will reference getUserMedia or whatever browser-prefixed version we can find
			URL, // will reference window.URL or whatever browser-prefixed version we can find
			video, // video element
			source, // wrapper object for source video
			effect, // edge detection effect
			target; // a wrapper object for our target canvas

		// detect browser-prefixed getUserMedia
		gUM = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

		// detect browser-prefixed window.URL
		URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

		// grab the video element
		video = document.getElementById('source');

		// construct our seriously object
		seriously = new Seriously();

		// grab the video stream
		if (gUM) {
			gUM.call(navigator,
				{video: true},
				// success callback
				function(stream){
					// check for firefox
					if (video.mozCaptureStream) {
						video.mozSrcObject = stream;
					} else {
						video.src = (URL && URL.createObjectURL( stream )) || stream;
					}
					video.play();
				}, 
				// error callback
				function(error){
					console.log("An error occurred: " + (error.message || error.name) + "");
				}
			);
		}

		// wait until video is ready
		video.addEventListener('canplay', function(){

			// time to get serious
			source = seriously.source(video);
			target = seriously.target('#target');
			effect = seriously.effect('sepia');

			// connect all our nodes in the right order
			effect.source = source;
			target.source = effect;

			seriously.go();
		});
})