/*
  literal-types(konkretūs tipai) - tai tipai sudaryti iš konkrečių reikšmių
*/

type Latvia = 'Latvia';
type Lithuania = 'Lithuania';
type Estonia = 'Estonia';
const country: Latvia = 'Latvia';

type BalticCountry = Latvia | Lithuania | Estonia;
const country2 = 'Estonia';

type HttpType = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

type HttpRequest = {
  url: string,
  headers?: {
    [key: string]: string,
  },
  body?: {
    [key: string]: string,
  }
  method: HttpType,
};

const req1 = {
  url: 'https://tavo-veidas.lt',
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const req2 = {
  url: 'https://tavo-veidas.lt/api/',
  headers: {
    'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
    'Content-Type': 'application/json',
  },
  body: {
    image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
  },
  method: 'POST',
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Literal types - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type Berlin = 'Berlin';
  type Munich = 'Munich';
  type Hamburg = 'Hamburg';
  type Cologne = 'Cologne';
  type Leipzig = 'Leipzig';
  type Germany = Berlin | Munich | Hamburg | Leipzig | Cologne;

  type Corgi = 'Corgi';
  type ScottishDachshund = 'Scottish Dachshund';
  type Poodle = 'Poodle';
  type Pitbull = 'Pitbull';
  type Chihuahua = 'Chihuahua';
  type Breeds = Corgi | ScottishDachshund | Poodle | Pitbull | Chihuahua;

  type Engine = 'Engine';
  type Gearbox = 'Gearbox';
  type Wheels = 'Wheels';
  type Trunk = 'Trunk';
  type Windshield = 'Windshield';
  type CarParts  =  Engine | Gearbox | Wheels | Trunk | Windshield;



  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite konkrečius 5 dižiausių Vokietijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
  {
    const city: Germany = 'Leipzig';
    console.log(city);
  }
  console.groupEnd();

  console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
  {
    const dog: Breeds = 'Corgi';
    console.log(dog);
  }
  console.groupEnd();

  console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
  {
    const parts: CarParts[] = ['Engine', 'Wheels', 'Gearbox'];
    console.log(parts);
  }
  console.groupEnd();

}
console.groupEnd();



