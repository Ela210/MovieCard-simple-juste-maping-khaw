import React from 'react';
import {Card,Button} from "react-bootstrap"

const MovieCard = ({Move})=> {

    return(
        <div style={{padding:"40px" , marginLeft:"50px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{Move.title}</Card.Title>
    <Card.Text>
    <Card.Img variant="top" src={Move.url} />

    </Card.Text>
    <Button variant="primary">{Move.rate}</Button>
  </Card.Body>
</Card>
        </div>
    )
};

export default MovieCard ;