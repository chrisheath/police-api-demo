import crimes from '../api/crimes';

function getCrime(lat, long, currentYear, currentMonth) {
  return dispatch => {    
    crimes.getCrimeByLocationAndDate(lat, long, `${currentYear}-${currentMonth}`)
      .then(({ data }) => {
        console.log('getCrime data', data);
        dispatch({ type: 'UPDATE_RESULTS', payload: data })
      })
      .catch((err) => {
        alert(`Error: ${err.message} (Older year/month combinations seem to error)`);
      });
  };
}

export default getCrime;