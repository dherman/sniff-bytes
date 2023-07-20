module.exports = require('@neon-rs/load').lazy({
  targets: {
    'win32-x64-msvc': () => require('@sniff-bytes/win32-x64-msvc'),
    'aarch64-pc-windows-msvc': () => require('@sniff-bytes/win32-arm64-msvc'),
    'darwin-x64': () => require('@sniff-bytes/darwin-x64'),
    'darwin-arm64': () => require('@sniff-bytes/darwin-arm64'),
    'linux-x64-gnu': () => require('@sniff-bytes/linux-x64-gnu'),
    'linux-arm-gnueabihf': () => require('@sniff-bytes/linux-arm-gnueabihf'),
    'android-arm-eabi': () => require('@sniff-bytes/android-arm-eabi')
  },
  exports: [
    'sniffBytes'
  ],
  debug: () => require('../index.node')
});
