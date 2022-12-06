import './CartItem.css';

export default function CartItem({ cartItem, isPaid }) {
  return (
    <div className="cartItem">
      <div className="flex-ctr-ctr">{cartItem.item.emoji}</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{cartItem.item.name}</span>
        <span>{cartItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button className="btn-xs" onClick={() => alert('clicked')}> − </button>
        }
        <span>{cartItem.qty}</span>
        {!isPaid &&
          <button className="btn-xs" onClick={() => alert('clicked')}> + </button>
        }
      </div>
      <div className="ext-price">${cartItem.extPrice.toFixed(2)}</div>
    </div>
  );
}