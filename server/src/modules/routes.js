import { Router } from 'express';

import { productRoutes } from './product';
import { authRoutes } from './auth';
import { orderRoutes } from './order';

const routes = new Router();

routes.use('/orders', orderRoutes);
routes.use('/products', productRoutes);
routes.use('/auth', authRoutes);

export default routes;
