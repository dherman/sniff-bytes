const addon = require('./load.cjs');

function hello() {
  return addon.hello();
}

module.exports = {
  hello
};
