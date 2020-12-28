// Add your functions

function map(array1,fct){
  let arr=[];
  for(let i=0;i<array1.length;i++){
  arr.push(fct(array1[i]));}
  
  return arr;
}

function reduce(array2,fct,startVal){
  let r
  if(!startVal){
  startVal=array2[0];
  r=1
  }
  else 
  {
    r=0
  }
  let s=startVal
  for(r;array2.length;r++){
    s=fct(array2[r],s)}
    return s;
  
}