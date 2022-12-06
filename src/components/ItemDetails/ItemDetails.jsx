import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ('./ItemDetails.css')

export default function ItemDetails ({activeItem}) {
    return (
        <>
        {activeItem ?
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={activeItem.image} />
            <Card.Body>
              <Card.Title>{activeItem.title} - ${activeItem.price}</Card.Title>
              <Card.Text>
              {activeItem.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><strong>Brand:</strong> {activeItem.brand}</ListGroup.Item>
              <ListGroup.Item><strong>Suggestion:</strong> {activeItem.suggestion}</ListGroup.Item>
              <ListGroup.Item><strong>Allergens:</strong> {activeItem.allergens}</ListGroup.Item>
            </ListGroup>
          </Card>

        :
            <div>Display Area</div>
        }
        


        </>
    )
}