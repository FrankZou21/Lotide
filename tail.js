const tail = function(arr) {
  if(arr.length > 1){
    return arr.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;
