function truthTable(n) {
    const combinations = [];
    backtrack([], n);
    return combinations;
  
    function backtrack(currentCombination, remainingVariables) {
      if (remainingVariables === 0) {
        combinations.push(currentCombination);
      } else {
        backtrack(currentCombination.concat(0), remainingVariables - 1);
        backtrack(currentCombination.concat(1), remainingVariables - 1);
      }
    }
  }

console.log('truthtable(1)',truthTable(1))
console.log('truthtable(2)',truthTable(2))
console.log('truthtable(3)',truthTable(3))
console.log('truthtable(4)',truthTable(4))
console.log('truthtable(5)',truthTable(5))