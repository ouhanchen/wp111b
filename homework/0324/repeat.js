function repeat(f, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(f());
    }
    return result;
  }

  console.log('repeat(Math.random,10)',repeat(Math.random,10))