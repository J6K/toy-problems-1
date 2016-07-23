const sortStack = (stack) => {
  let temp;
  let A = stack;
  let B = [];

  B.push(A.pop());

  while (A.length) {
    temp = A.pop();
    while (B[B.length - 1] < temp) {
      A.push(B.pop());
    }
    B.push(temp);
    while (A[A.length - 1] <= B[B.length - 1]) {
      B.push(A.pop())
    }
  }

  return B;
}
