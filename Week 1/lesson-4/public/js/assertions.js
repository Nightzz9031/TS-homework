"use strict";
const someNumber = 17;
const title = "Grace";
console.group('Assertions - užduotys');
{
    const btn = document.querySelector('#button');
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        const print = () => console.log('Paspausta!');
        btn.addEventListener('click', print);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        const squareContainer = document.querySelector('#square-container');
        const addSquare = () => {
            const square = document.createElement('div');
            square.className = 'square';
            squareContainer.append(square);
        };
        btn.addEventListener('click', addSquare);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const counter = document.querySelector('#counter');
        let count = 0;
        const addCount = () => {
            count++;
            counter.textContent = `Square count: ${count}`;
        };
        btn.addEventListener('click', addCount);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map