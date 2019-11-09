module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("mail");
    eleventyConfig.addPassthroughCopy("vendor");
    eleventyConfig.addPassthroughCopy("admin");

    return {
        PassthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        dir: {
            input: "src",
            output: "_site",
            includes: "includes"
        }
    }

}