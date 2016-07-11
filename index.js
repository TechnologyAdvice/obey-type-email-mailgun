var rp = require('request-promise')
var Promise = require('bluebird')

module.exports = function(obey, mailgunPublicKey) {
  obey.type('mailgunEmail', function(context) {
    return rp('https://api:' + mailgunPublicKey + '@api.mailgun.net/v3/address/validate?address=' + encodeURIComponent(context.value))
      .then(function(results) {
        if (!JSON.parse(results).is_valid) {
          context.fail(context.value + ' is an invalid email')
        }
      })
  })
}
