import Results from './components/Results';
import LocationSelector from './components/LocationSelector';
import DatePicker from './components/datePicker';
import { Container, Row, Col } from 'react-bootstrap';
import LoadCrimes from './components/loadCrimes';

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
        </Col>
      </Row>
      <Row>
        <Col>
          <DatePicker />
        </Col>
        <Col>
          <LoadCrimes />
        </Col>
      </Row>
      <Row>
        <Col>
          <Results />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
