function orDebug(thunk) {
  return () => {
    try {
      return thunk();
    } catch (e) {
      return require('../index.node');
    }
  };
}

module.exports = require('@neon-rs/load').lazy({
  'darwin-arm64': orDebug(() => require('@sniff-bytes/darwin-arm64'))
}, [
  'sniffBytes'
]);
