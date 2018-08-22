import Skill from './model';
import BaseService from '../base-service';

export class SkillService extends BaseService {
  constructor() {
    super(Skill);
  }

  create(values) {
    values.name = values.name.toLowerCase();
    return this.model.create(values);
  }
}

export default new SkillService();
