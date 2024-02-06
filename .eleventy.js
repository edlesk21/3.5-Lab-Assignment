// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("user", function(name, Useremail){
    return <div class = "user">
<div class = "user_name">${name}</div>
<div class = "user_email">@${Useremail}</div>
</div>;});
};