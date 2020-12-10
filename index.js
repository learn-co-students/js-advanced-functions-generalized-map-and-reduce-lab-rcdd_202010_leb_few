// Add your functions here
const map = (src, cb) => {
  let result = []

  for (let item of src) {
    let theElement = item
    result.push(cb(theElement))
  }

  return result;
}

const reduce = (src, cb, starting) => {
  let result = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    result = cb(src[i], result)
  }

  return result;
}