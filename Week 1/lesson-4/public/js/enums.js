"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    let Lithuania;
    (function (Lithuania) {
        Lithuania["Vilnius"] = "Vilnius 401km\u00B2";
        Lithuania["Kaunas"] = "Kaunas 157km\u00B2";
        Lithuania["Klaipeda"] = "Klaipeda 98km\u00B2";
        Lithuania["Siauliai"] = "Siauliai 88km\u00B2";
        Lithuania["Palanga"] = "Palanga 79km\u00B2";
    })(Lithuania || (Lithuania = {}));
    ;
    let LargestCountries;
    (function (LargestCountries) {
        LargestCountries[LargestCountries["China"] = 1] = "China";
        LargestCountries[LargestCountries["India"] = 2] = "India";
        LargestCountries[LargestCountries["UnitedStates"] = 3] = "UnitedStates";
        LargestCountries[LargestCountries["Indonesia"] = 4] = "Indonesia";
        LargestCountries[LargestCountries["Pakistan"] = 5] = "Pakistan";
    })(LargestCountries || (LargestCountries = {}));
    ;
    let GDP;
    (function (GDP) {
        GDP[GDP["USA"] = 1] = "USA";
        GDP[GDP["China"] = 2] = "China";
        GDP[GDP["Japan"] = 3] = "Japan";
        GDP[GDP["Germany"] = 4] = "Germany";
        GDP[GDP["UnitedKingdom"] = 5] = "UnitedKingdom";
    })(GDP || (GDP = {}));
    ;
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const city = Lithuania.Vilnius;
        console.log(city);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const city = LargestCountries.Indonesia;
        console.log(city);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const countryByGDP = GDP.USA;
        console.log(countryByGDP);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map