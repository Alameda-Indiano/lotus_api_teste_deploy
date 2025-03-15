const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  total: { type: Number, required: true },
  value: { type: Number, required: true },
  date: { type: String, required: true },
  establishment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: true },
  description: { type: String, required: true },
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

pointSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

const Point = mongoose.model('Point', pointSchema);

module.exports = Point;
