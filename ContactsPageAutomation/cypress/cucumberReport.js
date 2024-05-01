const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json/",
  reportPath: "./cypress/cucumber-report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "124.0.6367.91",
    },
    device: "Local",
    platform: {
      name: "Windows",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Contacts Page" },
      { label: "Release", value: "1.0.0" },
    ],
  },
});
