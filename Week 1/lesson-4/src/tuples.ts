/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type Person = [string, number];

  type Owner = {
    owner: string,
    age: number,
  };

  type Dog = {
    dogName: string,
    breed: string,
    age: number,
  };

  type Duo = [Owner, Dog];

  type TrianglePoints = [number, number];
  type Triangle = [TrianglePoints, TrianglePoints, TrianglePoints];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const human1: Person = ['Jonas', 28];
    console.log(human1);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const duo1: Duo = [{
      owner: 'Jonas',
      age: 28
    }, {
      dogName: 'Rocky',
      age: 12,
      breed: 'Dachshund'
    }];

    console.log(duo1);
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const triangle1: Triangle = [[3, -3], [0, -3], [-3, 0]];
    console.log(triangle1);
  }
  console.groupEnd();

}
console.groupEnd();