import CompanyType from './model';
import BaseService from '../base-service';

export class CompanyTypeService extends BaseService {
  constructor() {
    super(CompanyType);
  }
}

export default new CompanyTypeService();
