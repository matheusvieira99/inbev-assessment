const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    env: {
      apiHost: 'https://serverest.dev',
    },
  },
});
