
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['wRopT7vBAWDRNgF7DL873P'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  