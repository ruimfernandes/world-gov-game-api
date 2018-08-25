import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const CompanyTypeSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  skill: { type: ObjectId, ref: 'Skill', required: true }
});

CompanyTypeSchema.index({ type: 1, skill: 1 }, { unique: true });

export default mongoose.model('CompanyType', CompanyTypeSchema);
