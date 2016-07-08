var rp = require('request-promise')
var Promise = require('bluebird')

module.exports = function(obey, mailgunPublicKey) {
  obey.type('mailgunEmail', function(context) {
    return rp('https://api:' + mailgunPublicKey + '@api.mailgun.net/v3/validate?address=' + context.value)
      .then(function(results) {
        if (typeof results === 'object' && !results.is_valid) {
          context.fail(context.value + 'is an invalid email')
        }
      })
      .catch(function(err) {
        context.fail('Error validating email (' + context.value + '): ' + err.message)
      })
  })
}
