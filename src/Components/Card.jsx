import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card border="0" className='card'>
      <Card.Img className='img' src="./coolritiba.jpg" width="450" height="250"/>
      <Card.Body>
        <Card.Title>Evento em Curitiba</Card.Title>
        <Card.Text>
          Evento dia 23 de maio com vários artistas nacionais.
        </Card.Text>
        <Button className='button'>Veja mais</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;