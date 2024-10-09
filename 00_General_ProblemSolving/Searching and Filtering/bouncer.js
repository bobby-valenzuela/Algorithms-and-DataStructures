///// Remove falsy elements from array

function bouncer(arr){
    const truthies = [];

    for ( let [k,v] of Object.entries(arr)){

        if (!!arr[k]) truthies.push(arr[k]);

    }

    return truthies;
}

bouncer([7,"ate","",false, 9]);