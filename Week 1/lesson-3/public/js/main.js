"use strict";
const numbersArray = [2, 3, 4, -5, 7, 11, -25, 50, -101];
const stringArray = ['apple', 'apricot', 'carrot', 'pineapple', 'onion', 'apricot'];
const mixedArray = ['plane', 'car', 25, 11, 'house', 65, 'building'];
console.groupCollapsed('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const lastIndex = stringArray.length - 1;
    console.log('Paskutinio elemento indeksas: ' + lastIndex);
}
console.groupEnd();
console.groupCollapsed('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function solution() {
        for (let i = 0; i < stringArray.length; i++) {
            const allIndexes = `Element's '${stringArray[i]}' index is: ${i}`;
            console.log(allIndexes);
        }
    }
    solution();
}
console.groupEnd();
console.groupCollapsed('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    for (let i = 0; i < stringArray.length; i++) {
        const allIndexes = `Element value: '${stringArray[i]}' `;
        console.log(allIndexes);
    }
}
console.groupEnd();
console.groupCollapsed('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    for (let i = 0; i < stringArray.length; i++) {
        const allIndexes = `[${i}] ==> ${stringArray[i]}`;
        console.log(allIndexes);
    }
}
console.groupEnd();
console.groupCollapsed('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const reversedArray = stringArray.reverse();
    for (let i = 0; i < reversedArray.length; i++) {
        const result = reversedArray[i];
        console.log(result);
    }
}
console.groupEnd();
console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
        result[i] = stringArray.indexOf(stringArray[i]);
    }
    console.log(...result);
}
console.groupEnd();
console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    let result = [];
    for (let i = 0; i < mixedArray.length; i++) {
        result[i] = mixedArray[i];
    }
    console.log(...result);
}
console.groupEnd();
console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    let result = [];
    for (let i = 0; i < mixedArray.length; i++) {
        result[i] = `[${i}] ==> ${mixedArray[i]},`;
    }
    console.log(...result);
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    let multiply = [];
    for (let i = 0; i < numbersArray.length; i++) {
        multiply[i] = numbersArray[i] * 2;
    }
    console.log(`Original array: ${numbersArray}`);
    console.log(numbersArray);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    let squared = [];
    for (let i = 0; i < numbersArray.length; i++) {
        squared[i] = numbersArray[i] * numbersArray[i];
    }
    console.log(`Original array: ${numbersArray}`);
    console.log(squared);
}
console.groupEnd();
console.groupCollapsed('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    let multiByIndex = [];
    for (let i = 0; i < numbersArray.length; i++) {
        multiByIndex[i] = numbersArray[i] * i;
    }
    console.log(`Original array: ${numbersArray}`);
    console.log(multiByIndex);
}
console.groupEnd();
console.groupCollapsed('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const result = numbersArray.filter(num => num > 0);
    console.log(`Original array: ${numbersArray}`);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const result = numbersArray.filter(num => num < 0);
    console.log(`Original array: ${numbersArray}`);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const result = numbersArray.filter(num => num % 2 == 0);
    console.log(`Original array: ${numbersArray}`);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const result = numbersArray.filter(num => num % 2 !== 0);
    console.log(`Original array: ${numbersArray}`);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const result = numbersArray.map(nums => Math.abs(nums));
    console.log(`Original array: ${numbersArray}`);
    console.log(result);
}
console.groupEnd();
//# sourceMappingURL=main.js.map