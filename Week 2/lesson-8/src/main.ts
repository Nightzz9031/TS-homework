const capitalize = (word: string): string => {
  const words = word.trim().split(' ');
  const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1));
  return capitalizedWords.join(' ');
};
 
enum HeightUnits {
  CENTIMETRS = 'cm',
  METRES = 'm',
  INCHES = 'in',
};
enum WeightUnits {
  KILOGRAMS = 'KG',
  POUNDS = 'LBS',
};

class Person {
  static heightUnits: HeightUnits = HeightUnits.CENTIMETRS;
  static weightUnits: WeightUnits = WeightUnits.KILOGRAMS;
  private privateName! : string;
  private surname!: string;
  private age!: number;
  private height!: number;
  private weight!: number;

  public constructor(
    name: string, 
    surname: string, 
    age: number, 
    height: number,
    weight: number,
    heightUnits?: HeightUnits,
    weightUnits?: WeightUnits,

    ) {
    this.setName(name);
    this.setSurname(surname);
    this.setAge(age);
    this.setHeight(height, heightUnits);
    this.setWeight(weight, weightUnits);
  }

  public setName(name: string){
    if(name === '') throw new Error('Empty name');
    if(name.length < 2) throw new Error('Name must consist of 3 or more characters');

    this.privateName = capitalize(name);
  }
  public setSurname(surname: string){
    if(surname === '') throw new Error('Empty surname');
    if(surname.length < 5) throw new Error('Surame must consist of 3 or more characters');

    this.surname = capitalize(surname);
  }
  public setAge(age: number){
    if(age % 1 !== 0) throw new Error('Age must be an integer!')
    if(age < 1 || age > 150) throw new Error('Age must be between 1 and 150')
    this.age = age;
  }
  public setHeight(height: number, units: HeightUnits = HeightUnits.CENTIMETRS){
    switch(units){
      case HeightUnits.CENTIMETRS: this.height = height; break;
      case HeightUnits.METRES: this.height = height * 100; break;
      case HeightUnits.INCHES: this.height = height * 2.54; break;
    } 
  }
  public setWeight(weight: number, units: WeightUnits = WeightUnits.KILOGRAMS){
    switch(units){
      case WeightUnits.KILOGRAMS: this.weight = weight; break;
      case WeightUnits.POUNDS: this.weight = weight * 0.453; break;
    } 
  }

  
  getFullName(){
    return `${this.privateName} ${this.surname} ${this.age}`;
  }
  getAge(){
    return this.age;
  }
  getHeight(){
    switch(Person.heightUnits){
      case HeightUnits.CENTIMETRS: return this.height+HeightUnits.CENTIMETRS;
      case HeightUnits.METRES: return this.height / 100+HeightUnits.METRES;
      case HeightUnits.INCHES: return this.height / 2.54+HeightUnits.INCHES;
      default: return this.height;
    } 
  }
  getWeight(): number{
    switch(Person.weightUnits){
      case WeightUnits.KILOGRAMS: return this.weight;
      case WeightUnits.POUNDS: return this.weight / 0.453;

      default: return this.weight;
    } 
  }
  toString(): string {
    let fullName = `${this.privateName} ${this.surname}\n`;
    fullName += `\theight: ${this.getHeight()}\n`;
    fullName += `\tweight: ${this.getWeight()}${Person.weightUnits}\n`;

    return fullName;
  }
}
const people: Person[] = [
    new Person('jonas', 'Jonaitis', 25, 166, 90),
    new Person('Petras', 'petraitis', 19, 1.74, 75, HeightUnits.METRES, WeightUnits.KILOGRAMS),
    new Person('zZZZZ xxxxxx', 'YYYYY', 33, 70, 200, HeightUnits.INCHES,WeightUnits.POUNDS),
  ];

console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
  const fullNames: string[] = people.map((p) => p.getFullName())
  console.log(fullNames);
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
  const ages = people.map(p => p.getAge())
  console.log(ages);
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
  const heights = people.map(p => p.getHeight());
  console.log(heights);
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
  console.dir(Person.heightUnits);
  Person.heightUnits = HeightUnits.METRES;
  console.dir(Person.heightUnits);
  Person.heightUnits = HeightUnits.INCHES;
  console.dir(Person.heightUnits);
  Person.heightUnits = HeightUnits.CENTIMETRS;
  console.dir(Person.heightUnits);
}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
{
  Person.heightUnits = HeightUnits.METRES;
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.INCHES;
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.CENTIMETRS;
  console.log(people.map((p) => p.getHeight()));
}
console.groupCollapsed('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
  Person.heightUnits = HeightUnits.METRES;
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.INCHES;
  console.log(people.map((p) => p.getHeight()));
  Person.heightUnits = HeightUnits.CENTIMETRS;
  console.log(people.map((p) => p.getHeight()));
}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
  Person.weightUnits = WeightUnits.KILOGRAMS;
  console.log(people.map((p) => p.getWeight()));
  Person.weightUnits = WeightUnits.POUNDS;
  console.log(people.map((p) => p.getWeight()));
}
console.groupEnd();

console.groupCollapsed('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
{
  const person1: Person = new Person('Jonas', 'Jonaitis', 25, 180, 69);

  Person.heightUnits = HeightUnits.METRES;
  Person.weightUnits = WeightUnits.KILOGRAMS;
  console.log(person1.toString());
}