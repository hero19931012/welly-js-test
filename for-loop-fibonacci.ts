function fibonacci(position: number): number {
  if (position === 0) {
    return 0;
  }

  const list = [];

  for (let i = 0; i < position; i++) {
    if (i === 0 || i === 1) {
      list[i] = 1;
      continue;
    }
    list[i] = list[i - 1] + list[i - 2];
  }

  return list[position - 1];
}

console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(4)) // 3