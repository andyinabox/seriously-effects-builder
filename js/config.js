requirejs.config({
	baseUrl: 'js/',
	urlArgs: "_=" + (new Date()).getTime(),
	paths: {
		'text': 'components/requirejs-text/text',
		'seriously': 'components/seriouslyjs/seriously'
	}
});