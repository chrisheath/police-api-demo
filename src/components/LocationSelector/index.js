import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import { getCrime } from '../../store';

function LocationSelector() {  
  const currentLocation = useSelector(state => state.currentLocation);
  const locations = useSelector(state => state.locations);
  const dispatch = useDispatch();
  
  function onChange(e) {
    dispatch({ type: 'UPDATE_LOCATION', payload: e.target.value });

    const lat = locations[e.target.value].lat;
    const long = locations[e.target.value].long;

    dispatch(getCrime(lat, long));
  }

  return (
    <div class="location-selector">
      <Form.Control as="select" size="lg" onChange={onChange}>
        <option>Select Location</option>
        {locations.map(item => {
          return <option value={item.id} key={item.id}>{item.name}</option>
        })}
      </Form.Control>
    </div>
  );
};

export default LocationSelector;
