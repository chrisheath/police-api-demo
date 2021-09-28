// import { Component } from 'react';
// // import { connect } from "react-redux";
// 

// export default class LocationSelector extends Component {
//   render() {
//     return (

//     );
//   }
// }
import { Component } from 'react';
import { Form } from 'react-bootstrap';

class LocationSelector extends Component {
  render() {
    return (
      <Form.Control as="select" size="lg">
        <option>Select Location</option>
        <option value="0">Wales</option>
        <option value="1">Sussex</option>
        <option value="2">Norfolk</option>
        <option value="3">Yorkshire</option>
      </Form.Control>
    )
  }
}

export default LocationSelector;
