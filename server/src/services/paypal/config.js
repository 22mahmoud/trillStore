import paypal from 'paypal-rest-sdk';

import constants from '../../config/constants';

paypal.configure({
  headers: {
    custom: 'header',
  },
  mode: 'sandbox',
  client_id: constants.paypal.clientId,
  client_secret: constants.paypal.secret,
});
