// Add your functions here
function map(src, cb) {
  let r = []
  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }
  return r;
}

//mapToSquare([1, 2, 3, -9])
function reduce(src, cb, start){
  let r = (start) ? start : src[0]
  let i = (start) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}