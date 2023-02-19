///// Filter
Array.prototype.myFilter = function(callback) {
    var newArray = [];
    const currentArray = this;
    for ( let val of Object.values(currentArray)){
      if (!!callback(val)) newArray.push(val);
    }
    return newArray;
};