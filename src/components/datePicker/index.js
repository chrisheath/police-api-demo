import { connect, useDispatch } from 'react-redux';
import { Form, Col, Row } from 'react-bootstrap';

function DatePicker({ currentYear, currentMonth }) {  
  const dispatch = useDispatch();

  function onChangeYear(e) {
    dispatch({ type: 'UPDATE_YEAR', payload: e.target.value });
  }

  function onChangeMonth(e) {
    dispatch({ type: 'UPDATE_MONTH', payload: e.target.value });
  }

  return (
    <div className="date-picker">
      <Row>
        <Col>
          <Form.Control as="select" onChange={onChangeYear} defaultValue={currentYear}>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control as="select" onChange={onChangeMonth} defaultValue={currentMonth}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Form.Control>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  currentYear: state.currentYear,
  currentMonth: state.currentMonth,
});

export default connect(mapStateToProps)(DatePicker);
