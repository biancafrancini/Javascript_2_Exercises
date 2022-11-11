function sum(...numbers) {
    return numbers.reduce((prevNum, currNum) => prevNum + currNum, 0);
}

console.log(sum(1, 2, 3, 4, 5));