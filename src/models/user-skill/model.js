import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSkillSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: 'User', required: true },
  skill: { type: ObjectId, ref: 'Skill', required: true },
  value: { type: Number, default: 0 }
});

UserSkillSchema.index({ user: 1, skill: 1 }, { unique: true });

export default mongoose.model('UserSkill', UserSkillSchema);
