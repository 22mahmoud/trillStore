import { Router } from 'express';

import * as OrderControllers from './order.controllers';

const routes = Router();

routes.post('/buy', OrderControllers.buyProduct);
routes.get('/cancel/:orderID');
routes.get('/success/:orderID');
routes.get('/refund/:orderID');
routes.get('/orderdetails/:orderID');

export default routes;
