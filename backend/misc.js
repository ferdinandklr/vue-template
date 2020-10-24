const fs = require('fs')
require('colors')
const port = process.env.PORT

module.exports = {
  GetFrontendFilesUrl (sourceLocation, parent = '') {
    var out = []
    fs.readdirSync(sourceLocation + '/' + parent).forEach((file) => {
      if (file.includes('.')) {
        out.push('/' + parent + file)
      } else {
        this.GetFrontendFilesUrl(sourceLocation, parent + file + '/').forEach((entry) => {
          out.push(entry)
        })
      }
    })
    return out
  },
  GetReqSubdomains (req) {
    var subdomains = req.headers.host.split('.')
    subdomains.pop()
    return subdomains
  },
  GetIPAddress () {
    var interfaces = require('os').networkInterfaces()
    for (var devName in interfaces) {
      var iface = interfaces[devName]

      for (var i = 0; i < iface.length; i++) {
        var alias = iface[i]
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) return alias.address
      }
    }

    return '0.0.0.0'
  },
  Compiled () {
    console.clear()
    console.log(' DONE '.black.bgGreen + ' Compiled successfully'.green)
    console.log('\n\n  App running at :\n  - Local:    ' + ('http://localhost:' + port + '/').cyan + '\n  - Network:  ' + ('http://' + this.GetIPAddress() + ':' + port + '/').cyan + '\n\n  Note that the development build is not optimized.\n  To create a production build, run ' + 'npm run build'.gray + '.\n')
  }
}
