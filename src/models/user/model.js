import _ from 'lodash';
import mongoose from 'mongoose';

const ROLES = 'admin user'.split(' ');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    hash: { type: String, required: true },
    name: { type: String },
    role: { type: String, enum: ROLES, default: 'user' }
  },
  { timestamps: true }
);

UserSchema.set('toJSON', { transform: _transformToJSON });

function _transformToJSON(doc, ret) {
  return _.omit(ret, 'hash');
}

export default mongoose.model('User', UserSchema);
