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
  'win32-x64-msvc': orDebug(() => require('@sniff-bytes/win32-x64-msvc')),
  'aarch64-pc-windows-msvc': orDebug(() => require('@sniff-bytes/win32-arm64-msvc')),
  'darwin-x64': orDebug(() => require('@sniff-bytes/darwin-x64')),
  'darwin-arm64': orDebug(() => require('@sniff-bytes/darwin-arm64')),
  'linux-x64-gnu': orDebug(() => require('@sniff-bytes/linux-x64-gnu')),
  'linux-arm-gnueabihf': orDebug(() => require('@sniff-bytes/linux-arm-gnueabihf')),
  'android-arm-eabi': orDebug(() => require('@sniff-bytes/android-arm-eabi'))
}, [
  'sniffBytes'
]);
