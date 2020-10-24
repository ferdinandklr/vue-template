var users = ['Aymeric', 'Barnabé', 'Cédric', 'Douglas', 'Evangeline']

module.exports = function (req) {
  var url = req.url.split('/')
  url.shift()
  if (url[0] === 'users') {
    if (url.length >= 2) {
      var index = parseInt(url[1])
      if (!isNaN(index)) {
        if (index >= 0 && index < users.length) {
          return `{ "user": "${users[index]}" }`
        }
      }
    } else {
      return `{ "users": ${JSON.stringify(users)} }`
    }
  }
  return 'REQUEST NOT VALID'
}
