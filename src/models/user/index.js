import bcrypt from 'bcryptjs';
import User from './model';
import BaseService from '../base-service';

export class UserService extends BaseService {
  constructor() {
    super(User);
  }

  create(values) {
    values.email = values.email.toLowerCase();
    values.hash = bcrypt.hashSync(values.password, 8);
    return this.model.create(values);
  }

  authenticate(email, password) {
    email ? (email = email.toLowerCase()) : email;
    return this.findOne({ email }).then(validateUserPassword(password));
  }

  findByEmail(email) {
    return this.findOne({ email });
  }

  updatePassword(email, password) {
    return this.findByEmail(email).then(user => {
      if (!user) return null;
      user.hash = generateHashedPassword(password);
      return user.save();
    });
  }
}

function validateUserPassword(password) {
  return user => {
    if (user && bcrypt.compareSync(password, user.hash)) {
      return user.toJSON();
    }
  };
}

function generateHashedPassword(password) {
  return bcrypt.hashSync(password, 8);
}

export default new UserService();
