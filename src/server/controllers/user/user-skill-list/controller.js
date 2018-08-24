import Skill from '../../../../models/skill';
import UserSkill from '../../../../models/user-skill';
import * as helpers from '../../../helpers/helpers';
import errors from '../../../helpers/errors';

export class UserSkillController {
  constructor() {}

  find(req, res, next) {
    UserSkill.find({ user: req.user }, req.filter)
      .then(helpers.successResponse(res))
      .catch(errors.nextErr(next));
  }

  create(req, res, next) {
    Skill.findById(req.body.skill)
      .then(skill => {
        UserSkill.create(req.user, skill)
          .catch(errors.throwUnprocessableEntity('User-Skill not created'))
          .then(userSkill => {
            res.json(userSkill);
          })
          .catch(errors.nextErr(next));
      })
      .catch(errors.nextErr(next));
  }
}

export default new UserSkillController();
