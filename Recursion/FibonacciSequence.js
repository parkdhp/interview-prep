const fib = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4));


const addSequence = (n, b1, b2) => {
  if (n === 0) {
    return b1;
  }
  return addSequence(n - 1, b2, b1 + b2);
};

console.log(addSequence(4,1,1));
