module.exports = require('@neon-rs/load').lazy({
  'darwin-arm64': () => require('@cargo-messages/darwin-arm64')
}, [
  'hello'
]);
