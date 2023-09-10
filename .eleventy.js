module.exports = function(eleventyConfig) {
    // Input Directory : src Output directory: _site

    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/scripts");

    return {
        dir: { input: 'src', output: '_site' }
    };
};