import { useState, useEffect, useRef,} from "react"
import * as itemsAPI from "../../utilities/items-api"
import * as ordersAPI from "../../utilities/orders-api"
import CategoryList from "../../components/CategoryList/CategoryList";
import DisplayList from "../../components/DisplayList/DisplayList";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderHistoryButton from "../../components/OrderHistoryButton/OrderHistoryButton";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import { Link, useNavigate } from 'react-router-dom';


import ('./NewOrderPage.css')

export default function NewOrderPage () {
    const [displayItems, setDisplayItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [activeItem, setActiveItem] = useState('')
    const [cart, setCart] = useState(null)
    const navigate = useNavigate();

    const categoriesRef = useRef([])
    
    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll();
            categoriesRef.current = [...new Set(items.map((item) => item.category.name))]

            setDisplayItems(items);
            setActiveCategory(categoriesRef.current[0]);
        }
        getItems()
        console.log('⛑️', displayItems)
      }, []);

      async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
        setCart(updatedCart);
      }

      async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
      }

    return(
        <>
        
        <main className="NewOrderPage">
        <aside>
        <CategoryList categories={categoriesRef.current} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ItemDetails activeItem={activeItem} />
        <div>
            <OrderHistoryButton />
            <p>Happy Shopping!</p>
        </div>
        </aside>
        
        <div className="ProductDetails">
            <div className="section-heading"><span>Products</span>Price</div>
            <DisplayList setActiveItem={setActiveItem} activeItem={activeItem} displayItems={displayItems.filter(item => item.category.name === activeCategory)} setCart={setCart} />
        </div>
        <OrderDetails order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />
        </main>
        </>
    )
}