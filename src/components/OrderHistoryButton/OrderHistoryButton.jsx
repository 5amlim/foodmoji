import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function OrderHistoryButton () {
    const navigate = useNavigate();
    return (
        <div className="order-history">
            <br></br>
        <Button variant="dark" onClick={() => navigate('/orders') }> My Previous Orders </ Button>
        </div>
    )
}