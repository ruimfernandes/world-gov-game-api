import UserSkill from './model';
import BaseService from '../base-service';

export class UserSkillService extends BaseService {
  constructor() {
    super(UserSkill);
  }

  create(user, skill) {
    return this.model.create({ user, skill });
  }

  removeFromList(user, skill) {
    return this.model.remove({ user, skill }).exec();
  }
}

export default new UserSkillService();
