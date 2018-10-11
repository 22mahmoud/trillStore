import { ProductModel } from '../product';
import { createItem, createTransaction, createPaypalPayment } from '../../services/paypal/payment';

export const buyProduct = async (req, res) => {
  const { productId, quantity } = req.body;
  const { name, price } = await ProductModel.findById(productId);

  const itemObj = createItem({ name, price, quantity });

  const transactions = [
    createTransaction({
      description: 'nice shirt payment',
      itemList: [itemObj],
    }),
  ];

  createPaypalPayment(
    {
      cancelUrl: 'http://localhost:8080/api/order/cancel',
      returnUrl: 'http://localhost:8080/api/order/success',
      transactions,
    },
    (error, approvalUrl) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ approvalUrl });
      }
    },
  );
};
