import * as ordersAPI from '../../utilities/orders-api'
import ('./DisplayListItem.css')

export default function DisplayListItem ({item, setCart, setActiveItem, activeItem}) {
    
    const handleAddToOrder = async function () {
        const cart = await ordersAPI.addItemToCart(item._id)
        setCart(cart)
          }


return (
    <ul className="DisplayCard">
        <li className={item === activeItem ? 'active DisplayListItem' : 'DisplayListItem'} onClick={()=>setActiveItem(item)}  >
        {/* <img className="image" src={item.image}></img> */}
        <span className="name">{item.title}</span>
        <span className="align-rt">${item.price.toFixed(2)}    
        <button className="btn-sm" onClick={handleAddToOrder}>ADD</button>
        </span>
        </li>
    </ul>
    )
}