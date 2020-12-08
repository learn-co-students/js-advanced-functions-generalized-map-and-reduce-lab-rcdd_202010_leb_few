function map(arr, fun) {

  let s = arr.map(elemet => 
    (fun(elemet))
  )
  return s
}


function reduce(src, func, startpoint){
  if(!startpoint){
    return src.reduce((acc, val) => func(acc, val))
  }else{
    return src.reduce((acc, val) => func(acc, val), startpoint)
  }

}  