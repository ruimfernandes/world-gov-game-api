import { Router } from 'express';
import ctrl from './controller';

function UserSkillRouter() {
  const router = Router();

  router
    .route('/')
    .get(ctrl.find)
    .post(ctrl.create);

  return router;
}

export default UserSkillRouter();
