import { Router } from 'express';
import ctrl from './controller';

function MeRouter() {
  const router = Router();

  router.get('/', ctrl.me);

  return router;
}

export default MeRouter();
