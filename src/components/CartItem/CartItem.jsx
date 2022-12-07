import './CartItem.css';

export default function CartItem({ cartItem, isPaid, i, handleChangeQty}) {
  
    return (
    <div className="cartItem">
      <div className="flex-ctr-ctr">{i+1}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{cartItem.item.title}</span>
        <span>{cartItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button className="btn-xs" onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}> − </button>
        }
        <span>{cartItem.qty}</span>
        {!isPaid &&
          <button className="btn-xs" onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}> + </button>
        }
      </div>
      <div className="ext-price">${cartItem.extPrice.toFixed(2)}</div>
    </div>
  );
}