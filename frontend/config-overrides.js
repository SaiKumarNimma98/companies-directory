const path = require('path');

module.exports = function override(config) {
  return config;
};

module.exports.paths = function overridePaths(paths) {
  paths.appHtml = path.resolve(__dirname, 'src/index.html');
  return paths;
};
