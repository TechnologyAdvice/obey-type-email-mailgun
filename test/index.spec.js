/* global describe, it, expect */
var chai = require('chai')
global.expect = chai.expect

var obey = require('obey')
var mailgunPubKey = process.env.MAILGUN_API_KEY_PUBLIC
var emailValidator

describe('obey-type-email-mailgun', function() {
  before(function () {
    require('../index')(obey, mailgunPubKey)
    emailValidator = obey.rule({ type: 'mailgunEmail' })
  })
  it('resolves a valid email tested with the mailgunEmail type strategy', function() {
    return emailValidator.validate('kent.safranski@technologyadvice.com')
  })
  it('rejects an invalid email tested with the mailgunEmail type strategy', function() {
    return emailValidator.validate('not-an-email')
    .then(function() {
      throw new Error('This should not be valid')
    })
    .catch(function(err) {
      expect(err.message).to.equal('not-an-email: not-an-email is an invalid email')
    })
  })
})
