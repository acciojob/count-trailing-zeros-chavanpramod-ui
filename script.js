function trailingZeros(n) {
  let count = 0;
  
  // Count factors of 5 in n!
  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return count;
}

// Prompt user for input, compute trailing zeros, and display the result via alert
const input = prompt("Enter a non-negative integer:");
if (input !== null) {
  const n = parseInt(input, 10);
  alert(trailingZeros(n));
}