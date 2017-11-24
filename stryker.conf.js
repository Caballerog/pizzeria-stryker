module.exports = function(config) {
    config.set({
      files: [
        {pattern: './src/test/*.js', included: true, mutated:false},
        {pattern: './src/js/**/*.js', included: true, mutated:true}
      ],
      testRunner: "karma",
      mutator: "es5",
      transpilers: [],
      reporter: ["clear-text", "progress","html"],
      testFramework: "jasmine",
      coverageAnalysis: "perTest",
      karmaConfigFile: "karma.conf.js",
    });
  };