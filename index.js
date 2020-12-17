// Add your functions here
function map(arr, fct) {
  let r = []
  for (let i = 0; i < arr.length; i++) {
    r.push(fct(arr[i]))
  }
  return r;
}

function reduce(arr, fct, starting){
  let i;
  if(!starting){
    starting = arr[0];
   i =1;
  }
  else{
      i=0;
  }
  let r=starting;
  
  for (i; i < arr.length; i++) {
    r = fct(arr[i], r)
  }

  return r;
}
