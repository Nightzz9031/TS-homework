"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    // Funkcijos:
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    // Sprendimas:
    const identities = people.map(personToIdentity);
    // Spausdinimas:
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const test = ({ name, surname, married }) => ({
        name: String(name),
        surname: String(surname),
        married: Boolean(married)
    });
    const personMarriageStatus = people.map(test);
    console.log(personMarriageStatus);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const test = ({ sex, income }) => ({
        sex: String(sex),
        income: Number(income)
    });
    const personIncome = people.map(test);
    console.log(personIncome);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const test = ({ name, surname, sex }) => ({
        name: String(name),
        surname: String(surname),
        sex: String(sex)
    });
    const personSex = people.map(test);
    console.log(personSex);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const isMale = ({ sex }) => sex === 'male';
    const males = people.filter(isMale);
    console.log(males);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const isFemale = ({ sex }) => sex === 'female';
    const Females = people.filter(isFemale);
    console.log(Females);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const hasCar = ({ hasCar }) => Boolean(hasCar);
    const carOwners = people.filter(hasCar);
    console.log(carOwners);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const isMarried = ({ married }) => Boolean(married);
    const married = people.filter(isMarried);
    console.log(married);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    function genderCount(people) {
        return people.reduce((prev, curr) => {
            if (curr.hasCar === true && curr.sex === 'male') {
                prev.male++;
            }
            else if (curr.hasCar === true && curr.sex === 'female') {
                prev.female++;
            }
            return prev;
        }, { male: 0, female: 0 });
    }
    console.log(genderCount(people));
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const convertToSalary = people.map((_a) => {
        var { income } = _a, rest = __rest(_a, ["income"]);
        return (Object.assign(Object.assign({}, rest), { salary: income }));
    });
    console.log(convertToSalary);
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const anonPerson = (_a) => {
        var { name, surname, sex } = _a, rest = __rest(_a, ["name", "surname", "sex"]);
        return rest;
    };
    const anonPeople = people.map(anonPerson);
    console.log(anonPeople);
}
console.groupEnd();
console.group('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    const createFullname = (_a) => {
        var { name, surname } = _a, rest = __rest(_a, ["name", "surname"]);
        return (Object.assign(Object.assign({}, rest), { fullname: name + ' ' + surname }));
    };
    const fullnamePeople = people.map(createFullname);
    console.log(fullnamePeople);
}
console.groupEnd();
