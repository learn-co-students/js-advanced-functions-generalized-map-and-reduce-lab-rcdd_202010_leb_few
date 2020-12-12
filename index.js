// Add your functions here
function map(array, fx){
  let arr=[]
  for(let i=0;i <array.length;i++){
    arr.push(fx(array[i]));
  }
  return arr;
}

function reduce(array, fx, p){
 let a= (!!p) ? p : array[0];
 
 for ( let i=(!!p) ? 0 : 1 ; i< array.length;i++){
    a = fx(array[i], a)
 }
 
 return a;
}



