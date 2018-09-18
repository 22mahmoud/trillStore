// import { OrderModel } from '../../models/order';
import { promisify } from 'util';
import paypal from 'paypal-rest-sdk';

import './config';

const paypalRestSdkCreatePayment = promisify(paypal.payment.create);
// const paypalExecutePayment = promisify(paypal.payment.execute);
/*
const create_payment_json = {
  intent: 'sale',
  payer: {
    payment_method: 'paypal',
  },
  redirect_urls: {
    return_url: 'http://return.url',
    cancel_url: 'http://cancel.url',
  },
  transactions: [
    {
      amount: {
        currency: 'USD',
        total: '1.00',
      },
      description: 'This is the payment description.',
      item_list: {
        items: [
          {
            name: 'item',
            price: '1.00',
            currency: 'USD',
            quantity: 1,
          },
        ],
      },
    },
  ],
}; */

export const createItem = ({ name, price, quantity }) => ({
  name,
  price,
  quantity,
  currency: 'USD',
});

export const createTransaction = ({ description, itemList }) => ({
  amount: {
    total: itemList.reduce((acc, current) => {
      acc += current.price * current.quantity; // eslint-disable-line no-param-reassign
      return acc;
    }, 0),
    currency: 'USD',
  },
  description,
  item_list: { items: itemList },
});

export const createPaypalPayment = async ({ transactions, returnUrl, cancelUrl }, cb) => {
  // const db = {
  //   orderId: '',
  //   createdAt: '',
  //   transactions: '',
  // };
  const paymentData = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: returnUrl,
      cancel_url: cancelUrl,
    },
    transactions,
  };
  console.log(paymentData.transactions[0].amount.total);
  paypal.payment.create(paymentData, (error, res) => {
    if (error) {
      cb(error);
    } else {
      const approvalUrl = res.links.find(link => link.rel === 'approval_url');

      cb(null, approvalUrl);
    }
  });
};
