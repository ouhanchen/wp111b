function isPrimeNumber(n) {
    if (n <= 1) {
      return false;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  console.log('isPrimeNumber(1)',isPrimeNumber(1))
  console.log('isPrimeNumber(2)',isPrimeNumber(2))
  console.log('isPrimeNumber(3)',isPrimeNumber(3))
  console.log('isPrimeNumber(4)',isPrimeNumber(4))
  console.log('isPrimeNumber(6)',isPrimeNumber(6))