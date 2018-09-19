import { Router } from 'express';

import * as ProductController from './product.controllers';
import { authJWT } from '../auth';

const routes = Router();

routes.get('/', ProductController.getAllProducts);
routes.get('/:id', ProductController.getProduct);

routes.post('/add', authJWT, ProductController.addProduct);

routes.put('/edit/:id', authJWT, ProductController.editProduct);

routes.delete('/delete/:id', authJWT, ProductController.deleteProduct);

export default routes;
