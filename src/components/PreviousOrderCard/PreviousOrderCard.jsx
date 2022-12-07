export default function PreviousOrderCard ({previousOrders}) {
    const Orders = previousOrders.map( order => {
        const cartItem = order.cartItems.map(item=>{
            return (
                <div key={item.item.title}>
                <p>{item.item.title}</p>
                <p>{item.qty}</p>
                </div>
                )
        }
            )
        return(
            <div key={order.orderId}>
            <p >{order.orderId}</p>
            <p>{cartItem}</p>
            <p >Order Total: ${parseFloat(order.orderTotal).toFixed(2)}</p>
            </div>
        )
    }
    )
    return(
        <>
        {Orders}
        </>
    )
}