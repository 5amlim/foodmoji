const Order = require('../../models/order');
// const Item = require('../../models/item');

// const { default: OrderDetail } = require("../../src/components/OrderDetail/OrderDetail");

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  // find the unpaid order and return it in a response
  const cart = await Order.getCart(req.user._id)

  res.json(cart)
}

// Add the item to the cart
async function addToCart(req, res) {
    console.log(req.user)
  const cart = await Order.getCart(req.user._id);
  console.log('⛑️', cart)
  console.log('⛑️', req.params.id)
  // The promise resolves to the document, which we already have
  // in the cart variable, so no need to create another variable...
  await cart.addItemToCart(req.params.id); 
  res.json(cart);
}


// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
}

// Update the cart's isPaid property to true
async function checkout(req, res) {

}