function exponentiation(base, exponent) {
  let a = 1;
  let b = a;
  if (exponent % 2 === 0) {
    for (let i = 0; i < exponent / 2; i++) {
      b *= base;
    }
    b *= b;
    a = b;
    console.log(a);
  } else {
    for (let i = 0; i < (exponent - 1) / 2; i++) {
      b *= base;
    }
    b *= b * base;
    a = b;
    console.log(a);
  }
}

exponentiation(2, 5);
