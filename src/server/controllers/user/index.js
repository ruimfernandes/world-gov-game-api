import { Router } from 'express';
import ctrl from './controller';

function UserRouter() {
  const router = Router();

  router.param('userId', ctrl.setUserId);

  router
    .route('/')
    .get(ctrl.find)
    .post(ctrl.create);
  router
    .route('/:userId')
    .get(ctrl.findByID)
    .put(ctrl.update)
    .delete(ctrl.delete);

  return router;
}

export default UserRouter();
