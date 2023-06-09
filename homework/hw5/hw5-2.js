function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }

  console.log('fibonacci(1)',fibonacci(1))
  console.log('fibonacci(2)',fibonacci(2))
  console.log('fibonacci(10)',fibonacci(10))
  console.log('fibonacci(20)',fibonacci(20))
  console.log('fibonacci(30)',fibonacci(30))