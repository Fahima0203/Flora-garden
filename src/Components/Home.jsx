import './Home.css';
import React from 'react';
import Navbar from '../Components/Navbar.jsx'
// import plant from '../asserts/images/plant.jpg'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Home() {
    return (
        <>
            <Navbar />
            <h1>-</h1>
            <Row >
                <Card style={{ border: "2px solid #a7c957", borderRadius: "1.5rem", width:"18rem" }} >
                    <Card.Img variant="top" style={{ borderRadius: "25px", marginTop: "20px" }} src="https://media.istockphoto.com/photos/young-plant-growing-in-sunlight-picture-id658291850?k=20&m=658291850&s=612x612&w=0&h=RLzbYzoN8q8UoKDUd3eebu2hmrhCEYIE48C41x419Fs=" />
                    <Card.Body></Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Plantform to know about Plants</ListGroup.Item>
                        <ListGroup.Item>User can also upload </ListGroup.Item>
                        <ListGroup.Item>Plant Details</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ border: "2px solid #a7c957", borderRadius: "1.5rem", width: '18rem'}}>
                    {/* <Card.Img variant="top" src={plant} /> */}
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>  </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Card.Title className="text">Flora Garden</Card.Title>
                    <Card.Body>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>  </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Row>

            <h1>-</h1>
        </>
    )
}

export default Home;