import { useDispatch, connect } from 'react-redux';
import { Form } from 'react-bootstrap';

function LocationSelector({ currentLocation, locations }) {  
  const dispatch = useDispatch();
    
  function onChange(e) {
    const newVal = e.target.value;
    dispatch({ type: 'UPDATE_LOCATION', payload: [] });

    if (!newVal || newVal.length === 0) {
      return;
    }

    dispatch({ type: 'UPDATE_LOCATION', payload: newVal });
  }

  return (
    <div className="location-selector">
      <Form.Control as="select" size="lg" onChange={onChange}>
        <option value="">Select Location</option>
        {locations.map(item => {
          return <option value={item.id} key={item.id}>{item.name}</option>
        })}
      </Form.Control>
      {!currentLocation ? (
        <p>Please select a location above.</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentLocation: state.currentLocation,
  locations: state.locations,
});

export default connect(mapStateToProps)(LocationSelector);
