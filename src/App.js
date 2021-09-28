import DataTable from './components/DataTable';
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
          <DataTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
