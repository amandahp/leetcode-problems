/* some resolutions */

function reduceNumber(num, count){
  if (num > 0){
    if (num % 2 === 0 ){
      return reduceNumber(num/2, count+1)
    }else if (num !== 0){
      return reduceNumber(num-1, count+1)
    }
  }
  return count
}

function numberOfSteps(num){
  return reduceNumber(num, 0)
}
