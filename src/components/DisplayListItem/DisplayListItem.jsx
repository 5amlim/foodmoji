import * as ordersAPI from '../../utilities/orders-api'
import ('./DisplayListItem.css')

export default function DisplayListItem ({item, setCart, setActiveItem}) {
    
    const handleAddToOrder = async function () {
        const cart = await ordersAPI.addItemToCart(item._id)
        setCart(cart)
          }
    
    return (
        <li onMouseEnter={()=>setActiveItem(item)} onMouseLeave={()=>setActiveItem('')} className="DisplayListItem" >
        {/* <img className="image" src={item.image}></img> */}
        <span className="name">{item.title}</span>

        <span className="align-rt">${item.price.toFixed(2)}    
        <button className="btn-sm" onClick={handleAddToOrder}>ADD</button>
        </span>
        </li>
    )
}