// Add your functions here


function map(source,func) {
  let r = []
  for (let i = 0; i < source.length; i++ ) {
    r.push(func(source[i]))
  }
  return r
}


function reduce(array, combine, start) {
  let current = (!!start)? start:array[0];
  let i= (!!start)? 0:1;
  for (i;i<array.length;i++) {
    current = combine(current, array[i]);
  }
  return current;
}
  

