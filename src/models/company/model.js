import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: ObjectId, ref: 'CompanyType', required: true },
  owner: { type: ObjectId, ref: 'User', required: true },
  money: { type: Number, default: 0 },
  workPoints: { type: Number, default: 0 }
});

CompanySchema.index({ owner: 1 });

export default mongoose.model('Company', CompanySchema);
