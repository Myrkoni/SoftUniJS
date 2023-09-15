function flightSchedule(data) {
    let flights = {};

    for (let el of data[0]) {
        let [flight, destination] = el.split(' ');
        flights[flight] = {
            destination: destination,
            status: 'open',
        }
    }

    for (let el of data[1]) {
        let [flight, newStatus] = el.split(' ');
        if (flights.hasOwnProperty(flight)) {
            flights[flight].status = newStatus;
        }
    }

    if(data[2].join('') === "Ready to fly"){
        for(let el of Object.keys(flights)){
            if(flights[el].status == 'open'){
                flights[el].status = "Ready to fly";
                console.log(`{ Destination: '${flights[el].destination}', Status: '${flights[el].status}' }`)
            }
        }
    }else{
        for(let el of Object.keys(flights)){
            if(flights[el].status === 'Cancelled'){
                console.log(`{ Destination: '${flights[el].destination}', Status: '${flights[el].status}' }`)
            }
        }
    }
}
flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']])