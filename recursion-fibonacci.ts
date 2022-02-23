function fibonacci(position) {
  if (position === 0) {
    return 0
  }

  if (position === 1 || position === 2) {
    return 1;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3
