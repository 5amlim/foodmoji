import Card from 'react-bootstrap/Card';

export default function PreviousOrderCard ({previousOrders}) {
    const Orders = previousOrders.map( order => {
        const cartItem = order.cartItems.map(item=>{
            return (
                <div key={item.item.title}>
                <p>{item.item.title} x {item.qty} = ${item.extPrice}</p>
                </div>
                )
        }
            )
        return(
            <div key={order.orderId}>
                <Card className="text-center" >
                    <Card.Header>Order ID: {order.orderId} (Order Date: {(order.updatedAt).substring(0, 10)})</Card.Header>
                    <Card.Body>
                    <Card.Title>Order Details</Card.Title>
                    <Card.Text>
                        {cartItem}
                    </Card.Text>
                    </Card.Body>
                    {order.isPaid?
                    <Card.Footer className="text-muted">Total: ${parseFloat(order.orderTotal).toFixed(2)} <strong>PAID</strong></Card.Footer>
                    :
                    <Card.Footer className="text-muted">Total: ${parseFloat(order.orderTotal).toFixed(2)} <strong>PAYMENT PENDING</strong></Card.Footer>
                    }
                </Card>
                <br></br>
            </div>
        )
    }
    )
    return(
        <>
        <h3 className="text-center">Previous Orders</h3>
        {Orders}
        </>
    )
}