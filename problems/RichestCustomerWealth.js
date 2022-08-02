/* some resolutions */

let sumWealth = function(acc, cur){
  return acc + cur
}

let maximumWealth = function(accounts) {
  let max = 0

  for (let i = 0; i < accounts.length; i++){
    let sum = accounts[i].reduce(sumWealth)
    if (sum > max){
      max = sum
    }
  }
    return max
};