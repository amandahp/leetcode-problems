/* some resolutions */

// Resolution 1
function runningSum(nums) {
  let newArray = []
  let sum = 0;
  for(let i=0; i<nums.length; i++)
  {
      sum+=nums[i];
      newArray.push(sum);
  }
  return newArray
};

//Resolution 2

let runningSum = function(nums) {
  let newArray = []
  let count = 0
  
  nums.forEach((element, index) => {
      if (index === 0){
          newArray.push(element)  
      }else{
          newArray.push(element + count)
      }
      count += element
  })
  return newArray
}

//Resolution 3

let runningSum = function(nums) {
  let count = 0
  let newArray = []
  for (let i = 0; i < (nums.length); i++){
    if (i === 0){
      newArray.push(nums[i])
    }else{
      newArray.push(nums[i] + count)
    }
    count += nums[i]
  }
  
    return newArray
}

//Resolution 4
function myFunc(element, index, array){
  let count = 0
  if (index > 0){
    let newArray = array.slice(0, index)
    count = newArray.reduce(function(acc, cur){
      return acc + cur
    })
  }
  return element + count
}

let runningSum = function (nums) {
  let newArray = nums.map(myFunc)
  return newArray
}