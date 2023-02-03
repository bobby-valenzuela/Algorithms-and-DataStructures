////////// Map the Debris

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447; // KM    
    const returnObj = [];

    const getOrbitalPeriod = altitude => {
        // Using Kepler's Third Law
        // T = (2 * PI) * sqrt of ( semi-major axis ** 3 / GM)
        const distanceFromCenter = altitude + earthRadius;
        const square = Math.sqrt((distanceFromCenter ** 3) / GM );
        const time = Math.round(2 * Math.PI * square);
        return time;
    
    };

    for ( let [key, val] of Object.entries(arr)){
        const orbitalPeriod = getOrbitalPeriod(val.avgAlt);
        const obj = {name: val.name, orbitalPeriod: orbitalPeriod};
        returnObj.push(obj);
    }
  
    console.log(returnObj);
  
    return returnObj;

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
