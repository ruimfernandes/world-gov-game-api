import User from '../../../models/user';
import * as helpers from '../../helpers/helpers';
import errors from '../../helpers/errors';

export class UserController {
  constructor() {}

  setUserId(req, res, next) {
    User.findById(req.params.userId)
      .then(helpers.failIfNotFound('User not found'))
      .then(user => {
        req.user = user;
      })
      .then(next)
      .catch(errors.nextErr(next));
  }

  find(req, res, next) {
    User.find({}, req.filter)
      .then(helpers.successResponse(res))
      .catch(errors.nextErr(next));
  }

  findByID(req, res) {
    helpers.successResponse(res)(req.user);
  }

  create(req, res, next) {
    if (req.body.email && req.body.password) {
      User.create(req.body)
        .then(user => {
          res.json(user);
        })
        .catch(error => {
          let err;
          if (error.code === 11000) {
            err = new Error('Email already in use');
            err.status = 401;
          } else {
            err = new Error('shit');
            err.status = 420;
          }

          next(err);
        });
    } else {
      const err = new Error('Email and password are required');
      err.status = 400;
      next(err);
    }
  }

  update(req, res, next) {
    User.updateById(req.user._id, req.body)
      .then(helpers.successResponse(res))
      .catch(errors.nextErr(next));
  }

  delete(req, res, next) {
    User.delete(req.user)
      .then(helpers.failIfNotRemoved('Error deleting user'))
      .then(helpers.successEmptyResponse(res))
      .catch(errors.nextErr(next));
  }
}

export default new UserController();
