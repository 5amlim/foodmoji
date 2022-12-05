const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  brand: String,
  expDate: String,
  mfdDate: String,
  size: String,
  price: { type: Number, required: true, default: 0 },
  stock: String,
  image: String,
  suggestion: Array,
  allergens: Array,
}, {
  timestamps: true
});

module.exports = itemSchema;
