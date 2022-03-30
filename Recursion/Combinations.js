/*
 * C(n,k) -> Combinations
 * number of ways to choose k objects out of n, where repetition is not allowed and order is also not important.
 *
 * C(n,n) = 1    { _ _ _ _ }
 * C(n,0) = 1    {}
 * C(n,1) = (n,1) = n
 * C(n, n-1) = C(n,1)
 *
 * C(n,k) = C(n, n-k) = k!(n-k)! = n!/k!(n-k)!
 * C(n, n-k) = n!/(n-k)!(n-(n-k))! = n!/(n-k)!k! = C(n-k)
 *
 * C(n,k) = C(n-1, k) + C(n-1, k-1)
 * =(n-1)!/(k!(n-k-1)!) + (n-1)!/((k-1)!(n-k)!)
 * =(n-1)!/((k-1)!(n-k-1)![1/k+1/n-k]
 * =(n-1)!/((k-1)!(n-k-1)![(n-k+k)/(k(n-k))] = n!/(k!(n-k)!)
 *
 * Write a function that returns C(n,k):
 * C(n,k) = n!/k!(n-k)!
 * return fact(n)/(fact(k)*fact(n-k))
 */

const combination = (n, k) => {
  if (n <= 1 || k === 0 || k === n) {
    return 1;
  } else {
    return combination(n - 1, k) + combination(n - 1, k - 1);
  }
};

console.log(combination(4, 2));
