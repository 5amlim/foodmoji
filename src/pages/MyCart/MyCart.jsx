import OrderDetails from "../../components/OrderDetails/OrderDetails";

import ('./MyCart.css')

export default function MyCart ({cart, handleChangeQty, handleCheckout}) {
    return (
        <div className="OrderDetails">
        <h2 className="ctr">My Cart</h2>
        <OrderDetails order={cart} handleCheckout={handleCheckout} handleChangeQty={handleChangeQty} />
        </div>
    )
}