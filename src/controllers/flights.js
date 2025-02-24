
const FlightsController = {
    getFlights: async (req, res) => {
    
      const flights = [
        {
          "departureTime": "2017-06-01T21:21:17.274Z",
          "arrivalTime": "2017-06-01T22:21:17.274Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.331Z",
          "arrivalTime": "2017-06-02T09:21:17.331Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.306Z",
          "arrivalTime": "2017-06-02T03:21:17.306Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.291Z",
          "arrivalTime": "2017-06-02T14:21:17.291Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.282Z",
          "arrivalTime": "2017-06-02T16:21:17.282Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.293Z",
          "arrivalTime": "2017-06-02T16:21:17.293Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.291Z",
          "arrivalTime": "2017-06-02T00:21:17.291Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.276Z",
          "arrivalTime": "2017-06-02T13:21:17.276Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.319Z",
          "arrivalTime": "2017-06-02T00:21:17.319Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.280Z",
          "arrivalTime": "2017-06-02T04:21:17.280Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.321Z",
          "arrivalTime": "2017-06-02T09:21:17.321Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.303Z",
          "arrivalTime": "2017-06-02T04:21:17.303Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.319Z",
          "arrivalTime": "2017-06-02T06:21:17.319Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.281Z",
          "arrivalTime": "2017-06-01T23:21:17.281Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.315Z",
          "arrivalTime": "2017-06-02T07:21:17.315Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.338Z",
          "arrivalTime": "2017-06-01T23:21:17.338Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.312Z",
          "arrivalTime": "2017-06-02T10:21:17.312Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.298Z",
          "arrivalTime": "2017-06-02T07:21:17.298Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.286Z",
          "arrivalTime": "2017-06-02T12:21:17.286Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.345Z",
          "arrivalTime": "2017-06-01T22:21:17.345Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.296Z",
          "arrivalTime": "2017-06-02T07:21:17.296Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.344Z",
          "arrivalTime": "2017-06-02T00:21:17.344Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.330Z",
          "arrivalTime": "2017-06-02T10:21:17.330Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.318Z",
          "arrivalTime": "2017-06-02T10:21:17.318Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.360Z",
          "arrivalTime": "2017-06-02T10:21:17.360Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.347Z",
          "arrivalTime": "2017-06-02T08:21:17.347Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.322Z",
          "arrivalTime": "2017-06-02T04:21:17.322Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.353Z",
          "arrivalTime": "2017-06-02T04:21:17.353Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.333Z",
          "arrivalTime": "2017-06-02T17:21:17.333Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.312Z",
          "arrivalTime": "2017-06-02T14:21:17.312Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.299Z",
          "arrivalTime": "2017-06-02T04:21:17.299Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.358Z",
          "arrivalTime": "2017-06-02T04:21:17.358Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.359Z",
          "arrivalTime": "2017-06-02T07:21:17.359Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.344Z",
          "arrivalTime": "2017-06-02T09:21:17.344Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.367Z",
          "arrivalTime": "2017-06-02T07:21:17.367Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.370Z",
          "arrivalTime": "2017-06-02T13:21:17.370Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.396Z",
          "arrivalTime": "2017-06-02T00:21:17.396Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.377Z",
          "arrivalTime": "2017-06-02T13:21:17.377Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.346Z",
          "arrivalTime": "2017-06-02T14:21:17.346Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.345Z",
          "arrivalTime": "2017-06-02T13:21:17.345Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.387Z",
          "arrivalTime": "2017-06-02T00:21:17.387Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.346Z",
          "arrivalTime": "2017-06-02T02:21:17.346Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.358Z",
          "arrivalTime": "2017-06-02T09:21:17.358Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.397Z",
          "arrivalTime": "2017-06-02T10:21:17.397Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.355Z",
          "arrivalTime": "2017-06-02T04:21:17.355Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.394Z",
          "arrivalTime": "2017-06-02T13:21:17.394Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.385Z",
          "arrivalTime": "2017-06-02T13:21:17.385Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.384Z",
          "arrivalTime": "2017-06-02T06:21:17.384Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.354Z",
          "arrivalTime": "2017-06-02T14:21:17.354Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.342Z",
          "arrivalTime": "2017-06-02T00:21:17.342Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.383Z",
          "arrivalTime": "2017-06-02T08:21:17.383Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.411Z",
          "arrivalTime": "2017-06-02T12:21:17.411Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.400Z",
          "arrivalTime": "2017-06-02T14:21:17.400Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.367Z",
          "arrivalTime": "2017-06-02T06:21:17.367Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.387Z",
          "arrivalTime": "2017-06-02T14:21:17.387Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.392Z",
          "arrivalTime": "2017-06-02T13:21:17.392Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.390Z",
          "arrivalTime": "2017-06-02T12:21:17.390Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.360Z",
          "arrivalTime": "2017-06-01T22:21:17.360Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.351Z",
          "arrivalTime": "2017-06-02T09:21:17.351Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.402Z",
          "arrivalTime": "2017-06-02T07:21:17.402Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.399Z",
          "arrivalTime": "2017-06-02T08:21:17.399Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.389Z",
          "arrivalTime": "2017-06-02T09:21:17.389Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.350Z",
          "arrivalTime": "2017-06-02T03:21:17.350Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.387Z",
          "arrivalTime": "2017-06-02T03:21:17.387Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.375Z",
          "arrivalTime": "2017-06-02T01:21:17.375Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.420Z",
          "arrivalTime": "2017-06-02T09:21:17.420Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.483Z",
          "arrivalTime": "2017-06-02T06:21:17.483Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.452Z",
          "arrivalTime": "2017-06-02T06:21:17.452Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.458Z",
          "arrivalTime": "2017-06-02T09:21:17.458Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.501Z",
          "arrivalTime": "2017-06-02T07:21:17.501Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.515Z",
          "arrivalTime": "2017-06-02T07:21:17.515Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.478Z",
          "arrivalTime": "2017-06-02T14:21:17.478Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.472Z",
          "arrivalTime": "2017-06-02T00:21:17.472Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.480Z",
          "arrivalTime": "2017-06-02T03:21:17.480Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.498Z",
          "arrivalTime": "2017-06-02T17:21:17.498Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.508Z",
          "arrivalTime": "2017-06-02T17:21:17.508Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.504Z",
          "arrivalTime": "2017-06-02T00:21:17.504Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.482Z",
          "arrivalTime": "2017-06-02T12:21:17.482Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.461Z",
          "arrivalTime": "2017-06-02T06:21:17.461Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.531Z",
          "arrivalTime": "2017-06-02T01:21:17.531Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.527Z",
          "arrivalTime": "2017-06-02T06:21:17.527Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.469Z",
          "arrivalTime": "2017-06-02T06:21:17.469Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.487Z",
          "arrivalTime": "2017-06-02T15:21:17.487Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.477Z",
          "arrivalTime": "2017-06-01T22:21:17.477Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.531Z",
          "arrivalTime": "2017-06-02T12:21:17.531Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.466Z",
          "arrivalTime": "2017-06-02T11:21:17.466Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.515Z",
          "arrivalTime": "2017-06-01T22:21:17.515Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.527Z",
          "arrivalTime": "2017-06-02T04:21:17.527Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.536Z",
          "arrivalTime": "2017-06-02T07:21:17.536Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.485Z",
          "arrivalTime": "2017-06-02T09:21:17.485Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.504Z",
          "arrivalTime": "2017-06-02T02:21:17.504Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.479Z",
          "arrivalTime": "2017-06-02T06:21:17.479Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.497Z",
          "arrivalTime": "2017-06-02T09:21:17.497Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.519Z",
          "arrivalTime": "2017-06-02T12:21:17.519Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.467Z",
          "arrivalTime": "2017-06-02T15:21:17.467Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.504Z",
          "arrivalTime": "2017-06-02T04:21:17.504Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.521Z",
          "arrivalTime": "2017-06-02T01:21:17.521Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.476Z",
          "arrivalTime": "2017-06-02T00:21:17.476Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.496Z",
          "arrivalTime": "2017-06-02T12:21:17.496Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.524Z",
          "arrivalTime": "2017-06-02T13:21:17.524Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.501Z",
          "arrivalTime": "2017-06-01T23:21:17.501Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.541Z",
          "arrivalTime": "2017-06-02T01:21:17.541Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.534Z",
          "arrivalTime": "2017-06-02T09:21:17.534Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.507Z",
          "arrivalTime": "2017-06-02T04:21:17.507Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.484Z",
          "arrivalTime": "2017-06-02T07:21:17.484Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.510Z",
          "arrivalTime": "2017-06-02T14:21:17.510Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.518Z",
          "arrivalTime": "2017-06-01T22:21:17.518Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.509Z",
          "arrivalTime": "2017-06-02T06:21:17.509Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.552Z",
          "arrivalTime": "2017-06-02T09:21:17.552Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.506Z",
          "arrivalTime": "2017-06-02T12:21:17.506Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.553Z",
          "arrivalTime": "2017-06-02T07:21:17.553Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.522Z",
          "arrivalTime": "2017-06-02T15:21:17.522Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.502Z",
          "arrivalTime": "2017-06-02T08:21:17.502Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.489Z",
          "arrivalTime": "2017-06-02T08:21:17.489Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.497Z",
          "arrivalTime": "2017-06-02T02:21:17.497Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.507Z",
          "arrivalTime": "2017-06-02T05:21:17.507Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.495Z",
          "arrivalTime": "2017-06-02T05:21:17.495Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.556Z",
          "arrivalTime": "2017-06-02T15:21:17.556Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.512Z",
          "arrivalTime": "2017-06-02T00:21:17.512Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.543Z",
          "arrivalTime": "2017-06-02T17:21:17.543Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.548Z",
          "arrivalTime": "2017-06-02T07:21:17.548Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.547Z",
          "arrivalTime": "2017-06-02T11:21:17.547Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.528Z",
          "arrivalTime": "2017-06-02T08:21:17.528Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.526Z",
          "arrivalTime": "2017-06-02T13:21:17.526Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.547Z",
          "arrivalTime": "2017-06-02T17:21:17.547Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.540Z",
          "arrivalTime": "2017-06-02T14:21:17.540Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.540Z",
          "arrivalTime": "2017-06-02T16:21:17.540Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.511Z",
          "arrivalTime": "2017-06-02T17:21:17.511Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.529Z",
          "arrivalTime": "2017-06-02T15:21:17.529Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.550Z",
          "arrivalTime": "2017-06-02T07:21:17.550Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.564Z",
          "arrivalTime": "2017-06-02T16:21:17.564Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.534Z",
          "arrivalTime": "2017-06-02T06:21:17.534Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.561Z",
          "arrivalTime": "2017-06-02T04:21:17.561Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.569Z",
          "arrivalTime": "2017-06-02T04:21:17.569Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.586Z",
          "arrivalTime": "2017-06-02T02:21:17.586Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.574Z",
          "arrivalTime": "2017-06-02T14:21:17.574Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.548Z",
          "arrivalTime": "2017-06-01T23:21:17.548Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.557Z",
          "arrivalTime": "2017-06-02T06:21:17.557Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.579Z",
          "arrivalTime": "2017-06-01T23:21:17.579Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.573Z",
          "arrivalTime": "2017-06-02T04:21:17.573Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.585Z",
          "arrivalTime": "2017-06-02T02:21:17.585Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.610Z",
          "arrivalTime": "2017-06-02T00:21:17.610Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.578Z",
          "arrivalTime": "2017-06-02T05:21:17.578Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.583Z",
          "arrivalTime": "2017-06-02T13:21:17.583Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.616Z",
          "arrivalTime": "2017-06-02T06:21:17.616Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.605Z",
          "arrivalTime": "2017-06-02T13:21:17.605Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.577Z",
          "arrivalTime": "2017-06-02T06:21:17.577Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.610Z",
          "arrivalTime": "2017-06-02T17:21:17.610Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.608Z",
          "arrivalTime": "2017-06-02T04:21:17.608Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.602Z",
          "arrivalTime": "2017-06-02T08:21:17.602Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.597Z",
          "arrivalTime": "2017-06-02T17:21:17.597Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.598Z",
          "arrivalTime": "2017-06-02T08:21:17.598Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.629Z",
          "arrivalTime": "2017-06-02T11:21:17.629Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.566Z",
          "arrivalTime": "2017-06-02T15:21:17.566Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.633Z",
          "arrivalTime": "2017-06-02T01:21:17.633Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.640Z",
          "arrivalTime": "2017-06-02T01:21:17.640Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.574Z",
          "arrivalTime": "2017-06-02T09:21:17.574Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.574Z",
          "arrivalTime": "2017-06-02T05:21:17.574Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.630Z",
          "arrivalTime": "2017-06-02T06:21:17.630Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.603Z",
          "arrivalTime": "2017-06-02T05:21:17.603Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.621Z",
          "arrivalTime": "2017-06-02T17:21:17.621Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.637Z",
          "arrivalTime": "2017-06-02T10:21:17.637Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.627Z",
          "arrivalTime": "2017-06-02T08:21:17.627Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.659Z",
          "arrivalTime": "2017-06-02T16:21:17.659Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.631Z",
          "arrivalTime": "2017-06-02T09:21:17.631Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.623Z",
          "arrivalTime": "2017-06-01T23:21:17.623Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.599Z",
          "arrivalTime": "2017-06-02T16:21:17.599Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.621Z",
          "arrivalTime": "2017-06-02T01:21:17.621Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.632Z",
          "arrivalTime": "2017-06-01T22:21:17.632Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.636Z",
          "arrivalTime": "2017-06-02T05:21:17.636Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.612Z",
          "arrivalTime": "2017-06-02T05:21:17.612Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.659Z",
          "arrivalTime": "2017-06-02T16:21:17.659Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.604Z",
          "arrivalTime": "2017-06-02T00:21:17.604Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.606Z",
          "arrivalTime": "2017-06-02T15:21:17.606Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.625Z",
          "arrivalTime": "2017-06-02T08:21:17.625Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.617Z",
          "arrivalTime": "2017-06-02T11:21:17.617Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.623Z",
          "arrivalTime": "2017-06-02T00:21:17.623Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.606Z",
          "arrivalTime": "2017-06-02T02:21:17.606Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.622Z",
          "arrivalTime": "2017-06-02T16:21:17.622Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.644Z",
          "arrivalTime": "2017-06-02T11:21:17.644Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.621Z",
          "arrivalTime": "2017-06-02T07:21:17.621Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.641Z",
          "arrivalTime": "2017-06-02T11:21:17.641Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.615Z",
          "arrivalTime": "2017-06-02T11:21:17.615Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.646Z",
          "arrivalTime": "2017-06-02T17:21:17.646Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.651Z",
          "arrivalTime": "2017-06-02T08:21:17.651Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.651Z",
          "arrivalTime": "2017-06-02T06:21:17.651Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.641Z",
          "arrivalTime": "2017-06-02T08:21:17.641Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.665Z",
          "arrivalTime": "2017-06-02T00:21:17.665Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.654Z",
          "arrivalTime": "2017-06-02T03:21:17.654Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.681Z",
          "arrivalTime": "2017-06-02T11:21:17.681Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.668Z",
          "arrivalTime": "2017-06-02T00:21:17.668Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.633Z",
          "arrivalTime": "2017-06-02T11:21:17.633Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.669Z",
          "arrivalTime": "2017-06-02T08:21:17.669Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.621Z",
          "arrivalTime": "2017-06-02T06:21:17.621Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.683Z",
          "arrivalTime": "2017-06-02T03:21:17.683Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.639Z",
          "arrivalTime": "2017-06-02T07:21:17.639Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.688Z",
          "arrivalTime": "2017-06-02T12:21:17.688Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.705Z",
          "arrivalTime": "2017-06-02T02:21:17.705Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.679Z",
          "arrivalTime": "2017-06-02T02:21:17.679Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.684Z",
          "arrivalTime": "2017-06-02T01:21:17.684Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.661Z",
          "arrivalTime": "2017-06-02T06:21:17.661Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.645Z",
          "arrivalTime": "2017-06-02T10:21:17.645Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.712Z",
          "arrivalTime": "2017-06-02T12:21:17.712Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.650Z",
          "arrivalTime": "2017-06-02T15:21:17.650Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.707Z",
          "arrivalTime": "2017-06-02T13:21:17.707Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.707Z",
          "arrivalTime": "2017-06-01T23:21:17.707Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.680Z",
          "arrivalTime": "2017-06-02T14:21:17.680Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.675Z",
          "arrivalTime": "2017-06-02T03:21:17.675Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.649Z",
          "arrivalTime": "2017-06-02T00:21:17.649Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.700Z",
          "arrivalTime": "2017-06-02T13:21:17.700Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.720Z",
          "arrivalTime": "2017-06-02T05:21:17.720Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.668Z",
          "arrivalTime": "2017-06-02T11:21:17.668Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.663Z",
          "arrivalTime": "2017-06-02T05:21:17.663Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.679Z",
          "arrivalTime": "2017-06-02T11:21:17.679Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.685Z",
          "arrivalTime": "2017-06-02T08:21:17.685Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.689Z",
          "arrivalTime": "2017-06-02T00:21:17.689Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-02T15:21:17.715Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.699Z",
          "arrivalTime": "2017-06-02T10:21:17.699Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.660Z",
          "arrivalTime": "2017-06-02T09:21:17.660Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.716Z",
          "arrivalTime": "2017-06-02T02:21:17.716Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.659Z",
          "arrivalTime": "2017-06-02T04:21:17.659Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.666Z",
          "arrivalTime": "2017-06-02T06:21:17.666Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.691Z",
          "arrivalTime": "2017-06-02T15:21:17.691Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.725Z",
          "arrivalTime": "2017-06-02T08:21:17.725Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.655Z",
          "arrivalTime": "2017-06-02T06:21:17.655Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.710Z",
          "arrivalTime": "2017-06-02T03:21:17.710Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.662Z",
          "arrivalTime": "2017-06-02T02:21:17.662Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T11:21:17.722Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.655Z",
          "arrivalTime": "2017-06-02T12:21:17.655Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-02T16:21:17.715Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.694Z",
          "arrivalTime": "2017-06-02T10:21:17.694Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.700Z",
          "arrivalTime": "2017-06-02T08:21:17.700Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.727Z",
          "arrivalTime": "2017-06-02T04:21:17.727Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.700Z",
          "arrivalTime": "2017-06-02T00:21:17.700Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.727Z",
          "arrivalTime": "2017-06-02T11:21:17.727Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.690Z",
          "arrivalTime": "2017-06-02T02:21:17.690Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.688Z",
          "arrivalTime": "2017-06-02T03:21:17.688Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.689Z",
          "arrivalTime": "2017-06-02T09:21:17.689Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.678Z",
          "arrivalTime": "2017-06-02T04:21:17.678Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.709Z",
          "arrivalTime": "2017-06-02T10:21:17.709Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.685Z",
          "arrivalTime": "2017-06-02T05:21:17.685Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.688Z",
          "arrivalTime": "2017-06-02T12:21:17.688Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.728Z",
          "arrivalTime": "2017-06-02T03:21:17.728Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.719Z",
          "arrivalTime": "2017-06-02T14:21:17.719Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.691Z",
          "arrivalTime": "2017-06-02T09:21:17.691Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.728Z",
          "arrivalTime": "2017-06-02T09:21:17.728Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.671Z",
          "arrivalTime": "2017-06-02T11:21:17.671Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.719Z",
          "arrivalTime": "2017-06-02T17:21:17.719Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.699Z",
          "arrivalTime": "2017-06-02T08:21:17.699Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.678Z",
          "arrivalTime": "2017-06-02T05:21:17.678Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.731Z",
          "arrivalTime": "2017-06-02T00:21:17.731Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.738Z",
          "arrivalTime": "2017-06-02T10:21:17.738Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.707Z",
          "arrivalTime": "2017-06-02T04:21:17.707Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.706Z",
          "arrivalTime": "2017-06-02T07:21:17.706Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.688Z",
          "arrivalTime": "2017-06-02T14:21:17.688Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.738Z",
          "arrivalTime": "2017-06-02T14:21:17.738Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.738Z",
          "arrivalTime": "2017-06-02T02:21:17.738Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T11:21:17.722Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.723Z",
          "arrivalTime": "2017-06-01T22:21:17.723Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.695Z",
          "arrivalTime": "2017-06-01T23:21:17.695Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.718Z",
          "arrivalTime": "2017-06-02T01:21:17.718Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.725Z",
          "arrivalTime": "2017-06-02T05:21:17.725Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T12:21:17.741Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T07:21:17.741Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-02T04:21:17.715Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.686Z",
          "arrivalTime": "2017-06-02T12:21:17.686Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.679Z",
          "arrivalTime": "2017-06-02T06:21:17.679Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.748Z",
          "arrivalTime": "2017-06-02T08:21:17.748Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.719Z",
          "arrivalTime": "2017-06-02T15:21:17.719Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.748Z",
          "arrivalTime": "2017-06-02T13:21:17.748Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T17:21:17.741Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.680Z",
          "arrivalTime": "2017-06-02T03:21:17.680Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.751Z",
          "arrivalTime": "2017-06-02T11:21:17.751Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.700Z",
          "arrivalTime": "2017-06-02T03:21:17.700Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.754Z",
          "arrivalTime": "2017-06-02T04:21:17.754Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.698Z",
          "arrivalTime": "2017-06-02T09:21:17.698Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.719Z",
          "arrivalTime": "2017-06-01T22:21:17.719Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.728Z",
          "arrivalTime": "2017-06-02T12:21:17.728Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.720Z",
          "arrivalTime": "2017-06-02T10:21:17.720Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.691Z",
          "arrivalTime": "2017-06-02T01:21:17.691Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.711Z",
          "arrivalTime": "2017-06-02T02:21:17.711Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.750Z",
          "arrivalTime": "2017-06-02T00:21:17.750Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-01T22:21:17.715Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.683Z",
          "arrivalTime": "2017-06-02T16:21:17.683Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.687Z",
          "arrivalTime": "2017-06-02T16:21:17.687Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.701Z",
          "arrivalTime": "2017-06-01T23:21:17.701Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.710Z",
          "arrivalTime": "2017-06-02T08:21:17.710Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.696Z",
          "arrivalTime": "2017-06-02T05:21:17.696Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.718Z",
          "arrivalTime": "2017-06-02T02:21:17.718Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.723Z",
          "arrivalTime": "2017-06-02T17:21:17.723Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.689Z",
          "arrivalTime": "2017-06-02T00:21:17.689Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.749Z",
          "arrivalTime": "2017-06-02T08:21:17.749Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.738Z",
          "arrivalTime": "2017-06-02T14:21:17.738Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T07:21:17.722Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.713Z",
          "arrivalTime": "2017-06-02T01:21:17.713Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.704Z",
          "arrivalTime": "2017-06-02T03:21:17.704Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T09:21:17.741Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T12:21:17.722Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.723Z",
          "arrivalTime": "2017-06-02T04:21:17.723Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.696Z",
          "arrivalTime": "2017-06-02T15:21:17.696Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.736Z",
          "arrivalTime": "2017-06-02T17:21:17.736Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.762Z",
          "arrivalTime": "2017-06-02T03:21:17.762Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.748Z",
          "arrivalTime": "2017-06-02T02:21:17.748Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.724Z",
          "arrivalTime": "2017-06-02T12:21:17.724Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.755Z",
          "arrivalTime": "2017-06-02T01:21:17.755Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.747Z",
          "arrivalTime": "2017-06-02T15:21:17.747Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.763Z",
          "arrivalTime": "2017-06-02T00:21:17.763Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.748Z",
          "arrivalTime": "2017-06-02T17:21:17.748Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.702Z",
          "arrivalTime": "2017-06-02T16:21:17.702Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.710Z",
          "arrivalTime": "2017-06-02T04:21:17.710Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.739Z",
          "arrivalTime": "2017-06-01T22:21:17.739Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.726Z",
          "arrivalTime": "2017-06-02T15:21:17.726Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.757Z",
          "arrivalTime": "2017-06-02T08:21:17.757Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.735Z",
          "arrivalTime": "2017-06-02T01:21:17.735Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.737Z",
          "arrivalTime": "2017-06-02T10:21:17.737Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.694Z",
          "arrivalTime": "2017-06-02T15:21:17.694Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.724Z",
          "arrivalTime": "2017-06-02T08:21:17.724Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.735Z",
          "arrivalTime": "2017-06-02T16:21:17.735Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T07:21:17.741Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.733Z",
          "arrivalTime": "2017-06-02T07:21:17.733Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.769Z",
          "arrivalTime": "2017-06-02T00:21:17.769Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.730Z",
          "arrivalTime": "2017-06-02T10:21:17.730Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T02:21:17.722Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.713Z",
          "arrivalTime": "2017-06-02T17:21:17.713Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-02T03:21:17.715Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.771Z",
          "arrivalTime": "2017-06-02T11:21:17.771Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.699Z",
          "arrivalTime": "2017-06-02T10:21:17.699Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.718Z",
          "arrivalTime": "2017-06-02T00:21:17.718Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.751Z",
          "arrivalTime": "2017-06-02T08:21:17.751Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.724Z",
          "arrivalTime": "2017-06-02T08:21:17.724Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.740Z",
          "arrivalTime": "2017-06-02T12:21:17.740Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.728Z",
          "arrivalTime": "2017-06-02T11:21:17.728Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.715Z",
          "arrivalTime": "2017-06-02T02:21:17.715Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.711Z",
          "arrivalTime": "2017-06-02T16:21:17.711Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.768Z",
          "arrivalTime": "2017-06-02T03:21:17.768Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.764Z",
          "arrivalTime": "2017-06-02T15:21:17.764Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.743Z",
          "arrivalTime": "2017-06-02T15:21:17.743Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.707Z",
          "arrivalTime": "2017-06-01T23:21:17.707Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.771Z",
          "arrivalTime": "2017-06-02T03:21:17.771Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.722Z",
          "arrivalTime": "2017-06-02T10:21:17.722Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.713Z",
          "arrivalTime": "2017-06-02T15:21:17.713Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.768Z",
          "arrivalTime": "2017-06-02T04:21:17.768Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.761Z",
          "arrivalTime": "2017-06-01T22:21:17.761Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.770Z",
          "arrivalTime": "2017-06-02T04:21:17.770Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.731Z",
          "arrivalTime": "2017-06-02T16:21:17.731Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.720Z",
          "arrivalTime": "2017-06-02T05:21:17.720Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.729Z",
          "arrivalTime": "2017-06-02T02:21:17.729Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.776Z",
          "arrivalTime": "2017-06-02T14:21:17.776Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.782Z",
          "arrivalTime": "2017-06-02T01:21:17.782Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.761Z",
          "arrivalTime": "2017-06-02T15:21:17.761Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.759Z",
          "arrivalTime": "2017-06-02T11:21:17.759Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.723Z",
          "arrivalTime": "2017-06-01T22:21:17.723Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.781Z",
          "arrivalTime": "2017-06-01T22:21:17.781Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.744Z",
          "arrivalTime": "2017-06-02T06:21:17.744Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.726Z",
          "arrivalTime": "2017-06-02T07:21:17.726Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.771Z",
          "arrivalTime": "2017-06-02T12:21:17.771Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.774Z",
          "arrivalTime": "2017-06-02T10:21:17.774Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.780Z",
          "arrivalTime": "2017-06-02T08:21:17.780Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.751Z",
          "arrivalTime": "2017-06-02T02:21:17.751Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.770Z",
          "arrivalTime": "2017-06-02T11:21:17.770Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.741Z",
          "arrivalTime": "2017-06-02T11:21:17.741Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.753Z",
          "arrivalTime": "2017-06-02T09:21:17.753Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.735Z",
          "arrivalTime": "2017-06-02T01:21:17.735Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.773Z",
          "arrivalTime": "2017-06-02T13:21:17.773Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.746Z",
          "arrivalTime": "2017-06-02T04:21:17.746Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.768Z",
          "arrivalTime": "2017-06-02T05:21:17.768Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.747Z",
          "arrivalTime": "2017-06-02T11:21:17.747Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.777Z",
          "arrivalTime": "2017-06-01T23:21:17.777Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.750Z",
          "arrivalTime": "2017-06-02T12:21:17.750Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.755Z",
          "arrivalTime": "2017-06-02T05:21:17.755Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.782Z",
          "arrivalTime": "2017-06-02T12:21:17.782Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.753Z",
          "arrivalTime": "2017-06-02T04:21:17.753Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.762Z",
          "arrivalTime": "2017-06-02T15:21:17.762Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.802Z",
          "arrivalTime": "2017-06-02T08:21:17.802Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.735Z",
          "arrivalTime": "2017-06-02T15:21:17.735Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.757Z",
          "arrivalTime": "2017-06-02T06:21:17.757Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.760Z",
          "arrivalTime": "2017-06-02T09:21:17.760Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.761Z",
          "arrivalTime": "2017-06-01T23:21:17.761Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.785Z",
          "arrivalTime": "2017-06-02T08:21:17.785Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.753Z",
          "arrivalTime": "2017-06-02T07:21:17.753Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.745Z",
          "arrivalTime": "2017-06-02T17:21:17.745Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.752Z",
          "arrivalTime": "2017-06-02T17:21:17.752Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.768Z",
          "arrivalTime": "2017-06-02T05:21:17.768Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-02T17:21:17.799Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.801Z",
          "arrivalTime": "2017-06-02T02:21:17.801Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.785Z",
          "arrivalTime": "2017-06-02T02:21:17.785Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.794Z",
          "arrivalTime": "2017-06-01T22:21:17.794Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.748Z",
          "arrivalTime": "2017-06-02T08:21:17.748Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.747Z",
          "arrivalTime": "2017-06-02T06:21:17.747Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.738Z",
          "arrivalTime": "2017-06-01T23:21:17.738Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.784Z",
          "arrivalTime": "2017-06-01T22:21:17.784Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.780Z",
          "arrivalTime": "2017-06-02T16:21:17.780Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.751Z",
          "arrivalTime": "2017-06-02T00:21:17.751Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.776Z",
          "arrivalTime": "2017-06-01T23:21:17.776Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.766Z",
          "arrivalTime": "2017-06-01T22:21:17.766Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.795Z",
          "arrivalTime": "2017-06-02T03:21:17.795Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.805Z",
          "arrivalTime": "2017-06-01T23:21:17.805Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.757Z",
          "arrivalTime": "2017-06-02T17:21:17.757Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.804Z",
          "arrivalTime": "2017-06-02T02:21:17.804Z",
          "carrier": "UA",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.811Z",
          "arrivalTime": "2017-06-02T07:21:17.811Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.811Z",
          "arrivalTime": "2017-06-02T00:21:17.811Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.783Z",
          "arrivalTime": "2017-06-02T00:21:17.783Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.817Z",
          "arrivalTime": "2017-06-02T01:21:17.817Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.786Z",
          "arrivalTime": "2017-06-02T06:21:17.786Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.824Z",
          "arrivalTime": "2017-06-02T00:21:17.824Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.762Z",
          "arrivalTime": "2017-06-02T06:21:17.762Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.797Z",
          "arrivalTime": "2017-06-02T12:21:17.797Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.767Z",
          "arrivalTime": "2017-06-02T16:21:17.767Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.777Z",
          "arrivalTime": "2017-06-02T05:21:17.777Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.765Z",
          "arrivalTime": "2017-06-02T06:21:17.765Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-01T23:21:17.799Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.790Z",
          "arrivalTime": "2017-06-02T10:21:17.790Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.763Z",
          "arrivalTime": "2017-06-02T04:21:17.763Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.829Z",
          "arrivalTime": "2017-06-02T16:21:17.829Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.771Z",
          "arrivalTime": "2017-06-02T11:21:17.771Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.817Z",
          "arrivalTime": "2017-06-02T15:21:17.817Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.777Z",
          "arrivalTime": "2017-06-02T06:21:17.777Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.804Z",
          "arrivalTime": "2017-06-02T14:21:17.804Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.773Z",
          "arrivalTime": "2017-06-02T17:21:17.773Z",
          "carrier": "DL",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.767Z",
          "arrivalTime": "2017-06-02T10:21:17.767Z",
          "carrier": "FR",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-02T14:21:17.799Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.771Z",
          "arrivalTime": "2017-06-02T15:21:17.771Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.778Z",
          "arrivalTime": "2017-06-02T04:21:17.778Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.828Z",
          "arrivalTime": "2017-06-02T13:21:17.828Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.837Z",
          "arrivalTime": "2017-06-02T06:21:17.837Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.833Z",
          "arrivalTime": "2017-06-02T16:21:17.833Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.824Z",
          "arrivalTime": "2017-06-02T15:21:17.824Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.765Z",
          "arrivalTime": "2017-06-02T15:21:17.765Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.778Z",
          "arrivalTime": "2017-06-01T22:21:17.778Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.808Z",
          "arrivalTime": "2017-06-02T02:21:17.808Z",
          "carrier": "AA",
          "origin": "DEN",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.798Z",
          "arrivalTime": "2017-06-02T00:21:17.798Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.784Z",
          "arrivalTime": "2017-06-02T00:21:17.784Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.807Z",
          "arrivalTime": "2017-06-02T08:21:17.807Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.803Z",
          "arrivalTime": "2017-06-02T01:21:17.803Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.800Z",
          "arrivalTime": "2017-06-02T06:21:17.800Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.830Z",
          "arrivalTime": "2017-06-02T10:21:17.830Z",
          "carrier": "UA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.832Z",
          "arrivalTime": "2017-06-02T11:21:17.832Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.805Z",
          "arrivalTime": "2017-06-01T22:21:17.805Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.789Z",
          "arrivalTime": "2017-06-02T02:21:17.789Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.837Z",
          "arrivalTime": "2017-06-02T03:21:17.837Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.773Z",
          "arrivalTime": "2017-06-02T08:21:17.773Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.812Z",
          "arrivalTime": "2017-06-02T14:21:17.812Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.844Z",
          "arrivalTime": "2017-06-02T16:21:17.844Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.838Z",
          "arrivalTime": "2017-06-02T05:21:17.838Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-02T03:21:17.799Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.818Z",
          "arrivalTime": "2017-06-02T00:21:17.818Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.819Z",
          "arrivalTime": "2017-06-02T09:21:17.819Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.817Z",
          "arrivalTime": "2017-06-02T08:21:17.817Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.821Z",
          "arrivalTime": "2017-06-02T07:21:17.821Z",
          "carrier": "FR",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.808Z",
          "arrivalTime": "2017-06-02T05:21:17.808Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.834Z",
          "arrivalTime": "2017-06-01T23:21:17.834Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.843Z",
          "arrivalTime": "2017-06-02T17:21:17.843Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.796Z",
          "arrivalTime": "2017-06-02T13:21:17.796Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.792Z",
          "arrivalTime": "2017-06-02T12:21:17.792Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.794Z",
          "arrivalTime": "2017-06-01T23:21:17.794Z",
          "carrier": "AA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-02T00:21:17.799Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.804Z",
          "arrivalTime": "2017-06-02T11:21:17.804Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.786Z",
          "arrivalTime": "2017-06-02T16:21:17.786Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.797Z",
          "arrivalTime": "2017-06-02T17:21:17.797Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.819Z",
          "arrivalTime": "2017-06-01T23:21:17.819Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.821Z",
          "arrivalTime": "2017-06-02T15:21:17.821Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.825Z",
          "arrivalTime": "2017-06-02T04:21:17.825Z",
          "carrier": "SW",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.847Z",
          "arrivalTime": "2017-06-02T13:21:17.847Z",
          "carrier": "FR",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.832Z",
          "arrivalTime": "2017-06-02T15:21:17.832Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.826Z",
          "arrivalTime": "2017-06-01T23:21:17.826Z",
          "carrier": "DL",
          "origin": "SFO",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.840Z",
          "arrivalTime": "2017-06-02T07:21:17.840Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.835Z",
          "arrivalTime": "2017-06-02T10:21:17.835Z",
          "carrier": "UA",
          "origin": "DEN",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.824Z",
          "arrivalTime": "2017-06-02T17:21:17.824Z",
          "carrier": "FR",
          "origin": "AUS",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.830Z",
          "arrivalTime": "2017-06-02T08:21:17.830Z",
          "carrier": "SW",
          "origin": "SFO",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.848Z",
          "arrivalTime": "2017-06-02T08:21:17.848Z",
          "carrier": "DL",
          "origin": "BUR",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.796Z",
          "arrivalTime": "2017-06-02T04:21:17.796Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.797Z",
          "arrivalTime": "2017-06-02T06:21:17.797Z",
          "carrier": "UA",
          "origin": "AUS",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.799Z",
          "arrivalTime": "2017-06-01T22:21:17.799Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.867Z",
          "arrivalTime": "2017-06-01T23:21:17.867Z",
          "carrier": "SW",
          "origin": "AUS",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.803Z",
          "arrivalTime": "2017-06-02T08:21:17.803Z",
          "carrier": "SW",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.849Z",
          "arrivalTime": "2017-06-01T22:21:17.849Z",
          "carrier": "FR",
          "origin": "SJC",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.868Z",
          "arrivalTime": "2017-06-02T06:21:17.868Z",
          "carrier": "AA",
          "origin": "JFK",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.804Z",
          "arrivalTime": "2017-06-02T07:21:17.804Z",
          "carrier": "DL",
          "origin": "SJC",
          "destination": "BUR"
        },
        {
          "departureTime": "2017-06-01T21:21:17.826Z",
          "arrivalTime": "2017-06-02T10:21:17.826Z",
          "carrier": "DL",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.817Z",
          "arrivalTime": "2017-06-02T02:21:17.817Z",
          "carrier": "FR",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.859Z",
          "arrivalTime": "2017-06-02T00:21:17.859Z",
          "carrier": "UA",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.870Z",
          "arrivalTime": "2017-06-02T05:21:17.870Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.843Z",
          "arrivalTime": "2017-06-02T06:21:17.843Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.862Z",
          "arrivalTime": "2017-06-02T14:21:17.862Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.800Z",
          "arrivalTime": "2017-06-01T23:21:17.800Z",
          "carrier": "UA",
          "origin": "JFK",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.834Z",
          "arrivalTime": "2017-06-02T12:21:17.834Z",
          "carrier": "AA",
          "origin": "SJC",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.849Z",
          "arrivalTime": "2017-06-02T07:21:17.849Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.827Z",
          "arrivalTime": "2017-06-02T08:21:17.827Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.860Z",
          "arrivalTime": "2017-06-02T09:21:17.860Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.818Z",
          "arrivalTime": "2017-06-02T06:21:17.818Z",
          "carrier": "SW",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.825Z",
          "arrivalTime": "2017-06-01T22:21:17.825Z",
          "carrier": "FR",
          "origin": "SFO",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.817Z",
          "arrivalTime": "2017-06-02T03:21:17.817Z",
          "carrier": "DL",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.840Z",
          "arrivalTime": "2017-06-02T09:21:17.840Z",
          "carrier": "AA",
          "origin": "SFO",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.807Z",
          "arrivalTime": "2017-06-02T12:21:17.807Z",
          "carrier": "DL",
          "origin": "DEN",
          "destination": "AUS"
        },
        {
          "departureTime": "2017-06-01T21:21:17.840Z",
          "arrivalTime": "2017-06-02T16:21:17.840Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "JFK"
        },
        {
          "departureTime": "2017-06-01T21:21:17.877Z",
          "arrivalTime": "2017-06-01T22:21:17.877Z",
          "carrier": "UA",
          "origin": "LAX",
          "destination": "DEN"
        },
        {
          "departureTime": "2017-06-01T21:21:17.820Z",
          "arrivalTime": "2017-06-02T10:21:17.820Z",
          "carrier": "AA",
          "origin": "BUR",
          "destination": "LAX"
        },
        {
          "departureTime": "2017-06-01T21:21:17.886Z",
          "arrivalTime": "2017-06-02T01:21:17.886Z",
          "carrier": "SW",
          "origin": "JFK",
          "destination": "SFO"
        },
        {
          "departureTime": "2017-06-01T21:21:17.855Z",
          "arrivalTime": "2017-06-02T08:21:17.855Z",
          "carrier": "AA",
          "origin": "AUS",
          "destination": "SJC"
        },
        {
          "departureTime": "2017-06-01T21:21:17.865Z",
          "arrivalTime": "2017-06-02T12:21:17.865Z",
          "carrier": "SW",
          "origin": "LAX",
          "destination": "SJC"
        }
      ]
  
    return res.json({flights});
    }
}

module.exports = { FlightsController };