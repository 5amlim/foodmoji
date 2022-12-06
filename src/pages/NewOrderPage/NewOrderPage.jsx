import { useState, useEffect, useRef,} from "react"
import * as itemsAPI from "../../utilities/items-api"
import CategoryList from "../../components/CategoryList/CategoryList";
import DisplayList from "../../components/DisplayList/DisplayList";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderHistoryButton from "../../components/OrderHistoryButton/OrderHistoryButton";


import ('./NewOrderPage.css')

export default function NewOrderPage () {
    const [displayItems, setDisplayItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [cart, setCart] = useState(null)
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

    return(
        <main className="NewOrderPage">
        <aside>
        <h1>New Order</h1>
        <CategoryList categories={categoriesRef.current} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <OrderHistoryButton />
        </aside>
        <DisplayList displayItems={displayItems.filter(item => item.category.name === activeCategory)} setCart={setCart} />
        <OrderDetails order={cart} />
        </main>
    )
}