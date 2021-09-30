import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import getCrime from '../../store/getCrime';

function LoadCrimes({ currentLocation, locations, currentYear, currentMonth, getCrimes }) {
  function onClick() {
    if (!locations[currentLocation] || !locations[currentLocation].lat || !locations[currentLocation].long) {
      alert('Please select a location');
      return;
    }

    getCrimes(locations[currentLocation].lat, locations[currentLocation].long, currentYear, currentMonth);
  }

  return (
    <div className="load-crimes">
      <Button variant="primary" onClick={onClick}>
        Load Crimes
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  currentLocation: state.currentLocation,
  locations: state.locations,
  currentYear: state.currentYear,
  currentMonth: state.currentMonth,
});

const mapDispatchToProps = dispatch => ({
  getCrimes: (lat, long, currentYear, currentMonth) => dispatch(getCrime(lat, long, currentYear, currentMonth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadCrimes);
