function foo(a, b) {
  // Ensure both inputs are numbers
  a = Number(a);
  b = Number(b);

  //Check for NaN
  if(isNaN(a) || isNaN(b)){
    return 0; // Or handle the error appropriately
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: 2
console.log(foo(1, 'a')); // Output: 0 