import { useEffect, useState } from "react"
import PreviousOrderCard from "../../components/PreviousOrderCard/PreviousOrderCard";
import * as ordersAPI from "../../utilities/orders-api"

export default function OrderHistoryPage () {
    const [previousOrders, setPreviousOrders] = useState([])
    
    useEffect(function() {
    async function getOrders() {
        const orders = await ordersAPI.getOrders();
        setPreviousOrders(orders)
    }
    getOrders()
   }, [])
    
    return(
        <>
        <PreviousOrderCard previousOrders={previousOrders}/>
        </>
    )
}