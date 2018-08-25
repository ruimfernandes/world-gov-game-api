import Company from './model';
import BaseService from '../base-service';

export class CompanyService extends BaseService {
  constructor() {
    super(Company);
  }
}

export default new CompanyService();
