//note-1
const { defineConfig } = require('cypress');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');


module.exports= defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  numTestsKeptInMemory: 10,
  screenshotsFolder: "/cypress/screenshots",
  env:{
    "cypress-plugin-snapshots":{
      "imageConfig":{
        "threshold": 0.01
      }
    }
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: [
      '**/1-getting-started', 
      '**/2-advanced-examples',
      "**/examples/**",
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],//note-2
    specPattern: ['cypress/e2e/**/*.{js,jsx,ts,tsx}'],//note-3
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
