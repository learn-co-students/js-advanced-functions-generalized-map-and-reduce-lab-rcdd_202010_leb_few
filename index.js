// Add your functions here
function map(source, fn){ 
  let array=[];
  for(let i=0; i<source.length; i++){
    let el=source[i];
    array.push(fn(el))}
    return array
}

function reduce(source, fn, start){
  let array=(!!start)? start : source[0];
  let i=(!!start)? 0 : 1;
  for (; i<source.length; i++){
    array=fn(source[i], array)
  }
  return array
}