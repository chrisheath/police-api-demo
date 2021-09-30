import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

function Results({ currentLocation, locations, results, currentYear, currentMonth }) {
  return (
    <div className="results">
      <br /><br />
      <p>{results.length} Results found</p>
      {results.length === 0 ? (
        <p></p>
      ) : (
        <Table striped bordered>
          <thead>
            <tr>
              <th>Office</th>
              <th>Category</th>
              <th>Location</th>
              <th>Outcome</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            {results.map(item => {
              return (
                <tr key={item.id}>
                  <td>{locations[currentLocation].name}</td>
                  <td>{item.category}</td>
                  <td>{item.location.street.name}</td>
                  <td>{item.outcome_status ? item.outcome_status.category : 'Unknown'}</td>
                  <td>{currentYear}-{currentMonth}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  currentLocation: state.currentLocation,
  locations: state.locations,
  results: state.results,
  currentYear: state.currentYear,
  currentMonth: state.currentMonth,
});

export default connect(mapStateToProps)(Results);