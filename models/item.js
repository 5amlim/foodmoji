// models/item.js

const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const itemSchema = require('./itemSchema.js');

module.exports = mongoose.model('Item', itemSchema);
