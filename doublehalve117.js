function times(a, b) {
  return b === 0 ? 0 : a + times(a, b - 1);
}

function double(x) {
  return 2 * x;
}

function halve(x) {
  return x / 2;
}

function multiplier(a, b) {
  return b % 2 === 0 ? double(times(a, halve(b))) : a + times(a, halve(b - 1));
}
