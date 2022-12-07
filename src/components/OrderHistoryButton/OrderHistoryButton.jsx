import './OrderHistoryButton.css'
import { Navigate } from 'react-router-dom'

export default function OrderHistoryButton () {
    return (
        <div className="order-history">
        <button className="btn-sm" onClick={()=>Navigate('/orders')}> My Previous Orders </ button>
        </div>
    )
}