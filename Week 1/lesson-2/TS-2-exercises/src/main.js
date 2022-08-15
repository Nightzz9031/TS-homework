"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    function sortDrinkByPrice(drinks) {
        const ascendedSort = drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
        console.log(ascendedSort);
    }
    ;
    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 },
        { name: 'peach', price: 23 },
        { name: 'lemonade', price: 90 },
        { name: 'lime', price: 432 },
        { name: 'water', price: 120 },
        { name: 'lime', price: 80 },
        { name: 'peach', price: 90 }
    ];
    sortDrinkByPrice(drinks);
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, name, value) {
    }
    ;
}
console.groupEnd();
