
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
86400


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);