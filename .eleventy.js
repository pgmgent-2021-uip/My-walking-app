module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({
    'src/style.css': 'assets/style.css',
    'src/images/': 'assets/img',
  })
  return {
    dir: {
      input: 'views',
      output: 'docs'
    }
  }
};