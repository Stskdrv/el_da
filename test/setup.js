const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'ElDa.app', 'Contents', 'MacOS', 'ElDa')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'ElDa')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'ElDa.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
