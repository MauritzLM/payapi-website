// imports
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
	// adds the official eleventy navigation plugin for a scalable navigation
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPassthroughCopy('./src/assets');
	
	return {
		dir: {
			input: 'src',
			output: 'public',
			includes: '_includes',
			data: '_data',
		},
		htmlTemplateEngine: 'njk',
	};
};