const mongoose = require('mongoose');
const { personTypeEnum, maritalStatusEnum } = require('../../routes/http/client/schemas/schema')

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  person_type: { type: String, required: true, enum: personTypeEnum },
  birth_date: { type: Date, required: true },
  marital_status: { type: String, required: true, enum: maritalStatusEnum },
  birth_place: { type: String, required: true },
  occupation: { type: String, required: true },
  income: { type: String, required: true },
  children_number: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  primary_document: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  establishment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  },
  toObject: {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

clientSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
