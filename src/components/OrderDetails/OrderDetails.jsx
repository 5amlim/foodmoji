import CartItem from '../CartItem/CartItem';
import ('./OrderDetails.css')

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetails({ order, handleChangeQty, handleCheckout}) {
  if (!order) return null;

  const cartItems = order.cartItems.map((item, i) =>{
      return(
          <CartItem cartItem={item} isPaid={order.isPaid} key={item._id} i={i} handleChangeQty={handleChangeQty}/>
      )
  }
  );

  return (
    <div className="OrderDetail">
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {cartItems.length?
          <>
            {cartItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button className="btn-sm" onClick={handleCheckout} disabled={!cartItems.length}>CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          <div className="hungry">Items will show up here</div>
        }
      </div>
    </div>
  );
}