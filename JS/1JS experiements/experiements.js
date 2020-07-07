const primeNumbers = [10, 2, 3, 5, 7, 11, 13, 17];

console.log(primeNumbers.sort((el, el1) => {
	if (el > el1) {
      return 1;
    } else if (el1 > el) {
      return -1;
    }
  return 0;
}));
console.log(primeNumbers.join(" | "));