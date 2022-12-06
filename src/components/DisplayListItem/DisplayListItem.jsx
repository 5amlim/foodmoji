import * as ordersAPI from '../../utilities/orders-api'
import ('./DisplayListItem.css')

export default function DisplayListItem ({item, setCart }) {
    
    const handleAddToOrder = async function () {
        const cart = await ordersAPI.addItemToCart(item._id)
        setCart(cart)
          }
    
    return (
        <div className="DisplayListItem">
        <img className="image" src={item.image}></img>
        <div className="name">{item.title}</div>
        <div className="buy">
          <span>${item.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={handleAddToOrder}>ADD</button>
        </div>
      </div>
    )
}