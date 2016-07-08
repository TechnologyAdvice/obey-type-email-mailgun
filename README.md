# Obey Type Strategy Plugin for Mailgun Email Validation

Allows validating values and models with the [Obey module](https://github.com/TechnologyAdvice/obey) against the [Mailgun Email Validation API](https://documentation.mailgun.com/api-email-validation.html)

## Installation

```
npm install obey-type-email-mailgun --save
```

## Usage

To use the plugin import/require both the Obey module and the plugin, then call the method from the plugin with the following arguments:

1. The Obey module object
2. Your Public API Key from Mailgun

```javascript
const obey = require('Obey')
// Require type strategy plugin, provide Obey object and Mailgun Public API Key
require('obey-type-email-mailgun')(obey, 'XXXX-XXX-XXXX')
```

Once the above has been completed Obey will have the type strategy available as `mailgunEmail`:

```javascript
const model = obey.model({
  email: { type: 'mailgunEmail' }
})
```

## License

Obey is developed and maintained by [TechnologyAdvice](http://www.technologyadvice.com) and released under the [MIT](LICENSE.txt) license.