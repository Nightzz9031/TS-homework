/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
// const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
// formAddUser.onsubmit = (e) => {
//   e.preventDefault();
//   console.log('Ateityje pridėsiu vartotoją');
// };

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
  type EventHandler = () => void;
  const btn: HTMLButtonElement = document.querySelector('#button') as HTMLButtonElement;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    const print: EventHandler = () => console.log('Paspausta!');
    btn.addEventListener('click', print);
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    const squareContainer: HTMLDivElement = document.querySelector('#square-container') as HTMLDivElement;
    const addSquare: EventHandler = () => {
      const square: HTMLDivElement = document.createElement('div');
      square.className = 'square';
      squareContainer.append(square);
    }
    btn.addEventListener('click', addSquare);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
   const counter: HTMLParagraphElement = document.querySelector('#counter') as HTMLParagraphElement;
   
   let count: number = 0;
   const addCount: EventHandler = () => {
      count++;
      counter.textContent = `Square count: ${count}`;
   };
   btn.addEventListener('click', addCount);
  }
  console.groupEnd();

}
console.groupEnd();