import { Router } from 'express';
import ctrl from './controller';

function SkillRouter() {
  const router = Router();

  router.param('skillId', ctrl.setSkillId);

  router
    .route('/')
    .get(ctrl.find)
    .post(ctrl.create);
  router
    .route('/:skillId')
    .get(ctrl.findByID)
    .put(ctrl.update)
    .delete(ctrl.delete);

  return router;
}

export default SkillRouter();
