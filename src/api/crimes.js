import http from './http';

class Crimes {
    /**
     * /crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2017-01
    */ 
    getCrimeByLocationAndDate(lat, long, date) {
        return http.get(`/crimes-street/all-crime?lat=${lat}&lng=${long}&date=${date}`)
    }

    /**
     * /outcomes-for-crime/590d68b69228a9ff95b675bb4af591b38de561aa03129dc09a03ef34f537588c
     */
    getOutcomeForCrimeById(id) {
        return http.get(`/outcomes-for-crime/${id}`);
    }
}

export default new Crimes();
