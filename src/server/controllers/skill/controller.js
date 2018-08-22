import Skill from "../../../models/skill";
import * as helpers from "../../helpers/helpers";
import errors from "../../helpers/errors";

export class SkillController {
  constructor() {}

  setSkillId(req, res, next) {
    Skill.findById(req.params.skillId)
      .then(helpers.failIfNotFound("Skill not found"))
      .then(skill => {
        req.skill = skill;
      })
      .then(next)
      .catch(errors.nextErr(next));
  }

  find(req, res, next) {
    Skill.find({}, req.filter)
      .then(helpers.successResponse(res))
      .catch(errors.nextErr(next));
  }

  findByID(req, res) {
    helpers.successResponse(res)(req.skill);
  }

  create(req, res, next) {
    if (req.body.name) {
      Skill.create(req.body)
        .catch(errors.throwUnprocessableEntity("Skill not created"))
        .then(helpers.successResponse(res))
        .catch(errors.nextErr(next));
    } else {
      next(errors.badRequest());
    }
  }

  update(req, res, next) {
    Skill.updateById(req.skill._id, req.body)
      .then(helpers.successResponse(res))
      .catch(errors.nextErr(next));
  }

  delete(req, res, next) {
    Skill.delete(req.skill)
      .then(helpers.failIfNotRemoved("Error deleting skill"))
      .then(helpers.successEmptyResponse(res))
      .catch(errors.nextErr(next));
  }
}

export default new SkillController();
