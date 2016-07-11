var rp = require('request-promise')
var Promise = require('bluebird')

module.exports = function(obey, mailgunPublicKey) {
  obey.type('mailgunEmail', function(context) {
    return rp({
        uri: 'https://api:' + mailgunPublicKey + '@api.mailgun.net/v3/address/validate',
        qs: {
          address: context.value
        },
        json: true
    })
    .then(function(results) {
      if (!results.is_valid) {
        context.fail(context.value + ' is an invalid email')
      }
    })
  })
}
