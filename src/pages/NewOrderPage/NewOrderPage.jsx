import { useState, useEffect } from "react"
import * as itemsAPI from "../../utilities/items-api"

export default function NewOrderPage () {
    const [displayItems, setDisplayItems] = useState([]);
    
    useEffect(function() {
        async function getItems() {
            const items = await itemsAPI.getAll();
            setDisplayItems(items);
        }
        getItems()
        console.log('⛑️', displayItems)
      }, []);

    return(
        <>
        <h1>New Order</h1>
        <button > S</button>
        </>
    )
}