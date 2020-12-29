// Add your functions here
function map(arr, funct) {
  let a = []

  for (let i = 0; i < arr.length; i++) {
    let b = arr[i]
    a.push(funct(b))
  }

  return a;
}

function reduce(arr, funct, start){
  let r = (start) ? start : arr[0]
  let i = (start) ? 0 : 1

  for (i; i < arr.length; i++) {
    r = funct(arr[i], r)
  }

  return r;
}