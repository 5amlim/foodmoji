import './OrderHistoryButton.css'
import { useNavigate } from 'react-router-dom';

export default function OrderHistoryButton () {
    const navigate = useNavigate();
    return (
        <div className="order-history">
        <button className="btn-sm"onClick={() => navigate('/orders') }> My Previous Orders </ button>
        </div>
    )
}