import { Router } from 'express';

import * as authControllers from './auth.controllers';

const routes = Router();

routes.post('/signup', authControllers.signup);
routes.post('/login', authControllers.login);

export default routes;
