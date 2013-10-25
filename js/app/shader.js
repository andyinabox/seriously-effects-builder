define([
	'seriously',
	'text!../../glsl/shader.vert',
	'text!../../glsl/shader.frag'
], function(Seriously, vert, frag) {

	'use strict';

	var shader = {
			shader: function (inputs, shaderSource) {
				// shaderSource.vertex = vert;
				shaderSource.fragment = frag;
				return shaderSource;
			},
			inPlace: true,
			inputs: {
				source: {
					type: 'image',
					uniform: 'source'
				}
			},
			title: 'Sepia',
			description: 'Sepia shader'
		}


	// sepia coefficients borrowed from:
	// http://www.techrepublic.com/blog/howdoi/how-do-i-convert-images-to-grayscale-and-sepia-tone-using-c/120
	Seriously.plugin('sepia', shader);

	return shader;
});