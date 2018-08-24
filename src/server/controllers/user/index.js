import { Router } from 'express';
import ctrl from './controller';
import userSkillList from './user-skill-list';

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

  router.use('/:userId/skill', userSkillList);

  return router;
}

export default UserRouter();
