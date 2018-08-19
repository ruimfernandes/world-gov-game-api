export default class BaseService {
  constructor(model) {
    this.model = model;
  }

  create(values) {
    return this.model.create(values);
  }

  findOne(query) {
    return this.model.findOne(query).exec();
  }

  find(query, filter) {
    return this.model.find(query).exec();
  }

  findById(id) {
    return this.model.findOne({ _id: id }).exec();
  }

  delete(query) {
    return this.model.deleteOne(query).exec();
  }

  findAll(query) {
    return this.model.find(query).exec();
  }

  updateById(id, values) {
    return this.model
      .findOneAndUpdate({ _id: id }, values, { new: true })
      .exec();
  }
}
