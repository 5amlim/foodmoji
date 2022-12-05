const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const items = await Item.find({}).sort('title').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  console.log(res)
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
