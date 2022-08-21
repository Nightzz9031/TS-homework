/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui

  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓

// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class ListNode<T> {
    constructor(
      public data: T,
      public next: ListNode<T> | null = null
    ) { }
  };

  class List<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;

    constructor(data?: T) {
      if (data !== undefined) {
        this.head = new ListNode(data);
        this.tail = this.head;
      } else {
        this.head = null;
        this.tail = null;
      }
    }

    shift = (data: T): void => {
        const newNode = new ListNode(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    push = (data: T) => {
        const newNode = new ListNode(data);
        if(this.tail === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
const stringList: List<string> = new List();
const numberList: List<number> = new List(2);
// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    const list1: ListNode<string> = { data: 'Hello', next: null };
    const list2: ListNode<string> = { data: 'World', next: list1 };
    const list3: ListNode<string> = { data: '!', next: list2}
    console.log({
      listNode1: list1,
      listNode2: list2,
      listNode3: list3
    });
}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
    console.log('Empty string list');
    console.log(stringList);
  
    console.log('Numbers list');
    console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
    console.log(stringList);

    stringList.shift('animal');
    console.log({ ...stringList });
  
    stringList.shift('mammal');
    console.log({ ...stringList });
  
    stringList.shift('dog');
    console.log({ ...stringList });
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
    console.log(stringList);

    stringList.push('animal');
    console.log({ ...stringList });
  
    stringList.push('mammal');
    console.log({ ...stringList });
  
    stringList.push('dog');
    console.log({ ...stringList });
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{

}
console.groupEnd();
