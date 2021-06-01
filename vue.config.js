module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`
        //  `@import "@/styles/_settings-responsive.scss";`
        //  `@import "@/styles/_settings-responsive2.scss";`
      }
    }
  }
};