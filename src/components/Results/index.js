import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

function Results() {
  const currentLocation = useSelector(state => state.currentLocation);
  const results = useSelector(state => state.results);

  return (
    <div class="results">
      {!currentLocation ? (
        <p>Please select a location above.</p>
      ) : (
        <p></p>
      )}
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <Table>
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
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Results;