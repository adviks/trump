module.exports = function (eleventyConfig) {
 
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addWatchTarget("style");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
