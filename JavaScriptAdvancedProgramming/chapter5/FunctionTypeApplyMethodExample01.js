function sum(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

function callSum3(num1, num2) {
    return sum.call(this, num1, num2);
}

console.log(callSum1(10, 10));
console.log(callSum1(10, 10));