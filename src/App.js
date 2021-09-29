import Results from './components/Results';
import LocationSelector from './components/LocationSelector';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Police Crime Data</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <LocationSelector />
          <Results />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
