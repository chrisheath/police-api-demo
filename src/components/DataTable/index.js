import { Table } from 'react-bootstrap';

function DataTable() {
  return (
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
  );
}

export default DataTable;