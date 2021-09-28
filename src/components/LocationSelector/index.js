import { Dropdown } from 'react-bootstrap';

function LocationSelector() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="selectLocation">
        Select Location
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/wales">Wales</Dropdown.Item>
        <Dropdown.Item href="#/sussex">Sussex</Dropdown.Item>
        <Dropdown.Item href="#/norfolk">Norfolk</Dropdown.Item>
        <Dropdown.Item href="#/yorkshire">Yorkshire</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocationSelector;