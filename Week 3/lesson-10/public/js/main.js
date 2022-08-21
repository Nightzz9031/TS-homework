"use strict";
console.group('Function tasks');
console.group('Function that returns a number multiplied by 2');
{
    const double = (num) => num * 2;
    const numbers = [1, 2, 3, 4, 5];
    console.table({
        'double(2)': double(2),
        'double(4)': double(4),
        empty: undefined,
    });
    const numbersDoubled = numbers.map(double);
    console.table(numbersDoubled);
}
console.groupEnd();
console.group('');
console.groupEnd();
