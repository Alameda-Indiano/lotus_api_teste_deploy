const mongoose = require('mongoose');
const { accommodationTypeEnum } = require('../../routes/http/establishment/schemas/schema')

const establishmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  accommodation_type: { type: String, required: true, enum: accommodationTypeEnum },
  max_capacity: { type: Number, required: true },
  privacy_level: { type: Number, required: true },
  has_balcony: { type: Boolean, required: true },
  establishment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: false },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
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

establishmentSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

const Establishment = mongoose.model('Establishment', establishmentSchema);

module.exports = Establishment;
