type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
}

const people: Person[] = [
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
  // Tipai:
  type Identity = {
    name: Person["name"],
    surname: Person["surname"],
  }

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => {
    return { name, surname };
  }

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type Props = Pick<Required<Person>, 'name' | 'surname' | 'married'>;

  const test = ({ name, surname, married }: Person): Props => ({
    name: String(name), 
    surname: String(surname), 
    married: Boolean(married)
  });

  const personMarriageStatus: Props[] = people.map(test);
  console.log(personMarriageStatus);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  type Props = Pick<Required<Person>, 'sex' | 'income'>;

  const test = ({ sex, income }: Person): Props => ({
    sex: String(sex),
    income: Number(income)
  });

  const personIncome: Props[] = people.map(test);
  console.log(personIncome);
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type Props = Pick<Required<Person>, 'name' | 'surname' | 'sex'>;

  const test = ({ name, surname, sex}: Person): Props => ({
    name: String(name),
    surname: String(surname),
    sex: String(sex)
  });

  const personSex: Props[] = people.map(test);
  console.log(personSex);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  type Male = Omit<Person, 'sex'> & { 
    sex: 'male',
  }

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.log(males);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  type Female = Omit<Person, 'sex'> & { 
    sex: 'female',
  }

  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const Females: Female[] = people.filter(isFemale) as Female[];

  console.log(Females);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type carOwner = Omit<Person, 'hasCar'> & { 
    hasCar: 'true',
  }

  const hasCar = ({ hasCar }: Person): boolean => Boolean(hasCar);
  
  const carOwners: carOwner[] = people.filter(hasCar);

  console.log(carOwners);
  
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type isMarried = Omit<Person, 'married'> & { 
    married: true,
  }

  const isMarried = ({ married }: Person): boolean => Boolean(married);
  
  const married: isMarried[] = people.filter(isMarried);

  console.log(married);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type CarOwnerCountBySex = {
    [Key in Person["sex"]]?: number
  }

  function genderCount(people: any[]): CarOwnerCountBySex {
    return people.reduce((prev, curr): number => {
        if (curr.hasCar === true && curr.sex === 'male') {
            prev.male++;
        }
        else if(curr.hasCar === true && curr.sex === 'female'){
            prev.female++;
        }
        return prev;
    }, {male: 0, female: 0});
}

console.log(genderCount(people));

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type Salary = Omit<Person, 'income'> & {
    salary?: Person['income']
  }

  const convertToSalary: Salary[] = people.map(({ income, ...rest }) => ({ ...rest, salary: income }));

console.log(convertToSalary);
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type Anon = Omit<Person, 'name' | 'surname' | 'sex'>;

  const anonPerson = ({name, surname, sex, ...rest}: Person): Anon => rest;

  const anonPeople: Anon[] = people.map(anonPerson); 

  console.log(anonPeople);
}
console.groupEnd();

console.group('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type FullnamePerson = Omit<Person, 'name' | 'surname'> & {
    fullname: string,
  }

  const createFullname = ({ name, surname, ...rest }: Person): FullnamePerson => ({...rest, fullname: name + ' ' + surname })

  const fullnamePeople: FullnamePerson[] = people.map(createFullname);

  console.log(fullnamePeople);
}
console.groupEnd();