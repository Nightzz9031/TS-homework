"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51,
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55,
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45,
    }];
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
const sumNumbers = (nums) => {
    const numberSumReducer = (sum, num) => sum + num;
    return nums.reduce(numberSumReducer, 0);
};
const createPeopleArray = (p1, p2) => [p1, p2];
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        const result = sumNumbers(numbers);
        console.log({
            numbers,
            result,
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        const couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.group('Užduotys');
{
    console.group('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numbers = [1, -8, -6, 7, 5, 1];
        function addPositiveNumbers(arr) {
            const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers,
            sumOfPositiveNumbers: addPositiveNumbers(numbers),
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        function getFirstLetter(array) {
            const arrayItem = array.map(item => item.map(firstLetter => {
                return firstLetter[0];
            }));
            const joined = arrayItem.join(' ');
            console.log(joined.replaceAll(',', ''));
        }
        ;
        const exampleArray = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Laughing', 'Out', 'Loud'],
            ['Laughing', 'My', 'Ass', 'Off']
        ];
        getFirstLetter(exampleArray);
        console.groupEnd();
        console.group('3. Sukurkite ir tipais aprašykite funkciją, kuri sudaugintų visus number masyvo skaičius');
        {
            function multiplyArray(array) {
                const arrayItem = array.map((item) => item.reduce((previous, next) => {
                    return previous * next;
                }));
                console.log(arrayItem);
            }
            const numberArray = [
                [1, 7, 8],
                [98, 74, 5, 0],
                [17, 10, 5],
            ];
            multiplyArray(numberArray);
        }
        console.groupEnd();
    }
    console.groupEnd();
}
;
//# sourceMappingURL=main.js.map