/* some resolutions */

function fizzBuzz(n) {
  let arr = [...Array(n+1).keys()].slice(1)
  let newArr = arr.map((element) => {
    if(element % 3 === 0 && element % 5 === 0){
      return element = "FizzBuzz"
    }else if (element % 3 === 0){
      return element = "Fizz"
    }else if (element % 5 === 0){
      return element = "Buzz" 
    }else{
      return `${element}`}
  })
  
  return newArr

};