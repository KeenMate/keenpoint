// const removeUrlLoaderLimit = function(rule) {
//   return rule
//     .use("url-loader")
//     .loader("url-loader")
//     .tap(options => delete options.limit);
// };

module.exports = {
  chainWebpack: config => {
    config.output
      .filename("[name].js")
    config.optimization.delete("splitChunks");
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        delete options["limit"];
        return options
      });
    config.module
      .rule("media")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        delete options["limit"];
        return options
      });
    config.module
      .rule("fonts")
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        delete options["limit"];
        return options
      });
    config.plugins.delete("copy");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  },
  css: {
    modules: true,
    extract: false
  }
};
