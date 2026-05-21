import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Logo() {
  return (
    <>

      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src='./sympl.png'
              width="180"
              height="60"
              alt="Sympla Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Logo;