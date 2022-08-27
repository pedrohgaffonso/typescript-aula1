import { Greeter } from './home';

let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h3>other list: ${otherList}<?h3>
`;

let me: [string, number];

me = ['Pedro', 27];

const appmeDiv: HTMLElement = document.getElementById('appme');
appmeDiv.innerHTML = `
<h1>Tuple</h1>
<h2>My name is ${me[0]} and I'm ${me[1]} years old</h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appcolorDiv: HTMLElement = document.getElementById('appcolor');
appcolorDiv.innerHTML = `
<h1>Enumerated types </h1>
<h2>Cor 1: ${color1}</h2>
<h3>Cor 2: ${color2}</h3>
`;

let notSure: any = 4;
notSure = 'Maybe I am a string';
notSure = false; //okay, definilety a boolean
const anyDiv: HTMLElement = document.getElementById('any');
anyDiv.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

function warnUser(): void {
  console.log['This is my waring message'];
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const funcDiv: HTMLElement = document.getElementById('func');
funcDiv.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h3>unusable: ${myFunction}</h3>
`;

/*declare function create(o; object | null): void;
create({prop; 0}); 
create(null); 
create(27);
create('string');
create(false);
*/

const decDiv: HTMLElement = document.getElementById('dec');
decDiv.innerHTML = `
<h1>Object</h1>
`;

let somevalue: any = "this is a string";
let strLength: number = [<string>somevalue].length;

let somevalue2: any = "this is a string";
let strLength2: number = [somevalue2 as string].length;

const someDiv: HTMLElement = document.getElementById('some');
someDiv.innerHTML = `
<h1>Type assertions</h1>
`;

function sum(n1: number, n2: number): number{
  return n1+n2;
}

function fullName(pessoa: {name: string, lastname: string}): string{
  return pessoa.name+" "+pessoa.lastname;
}

const concatDiv: HTMLElement = document.getElementById('concat');
concatDiv.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2,3)}</h2>
<h3>Soma de 11 e 329: ${sum(1,329)}</h3>
<h4>Meu nome completo é ${fullName({lastname:'Affonso',name:'Pedro Henrique Garcia'})}</h4>
`;

let title: string = "Olá, mundo!";
let paragraph: string = "Blablabla";

let counter = 0;
let intervalId = setInterval(() => {
  counter = counter + 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: '+counter;
}, 1000)

//Declarando uma função para ser invocada por um evento
const btn = document.getElementById("appButton");
btn?.addEventListener("click", alertTsMethod);
function alertTsMethod(this: HTMLElement, ev: Event){
  alert("Alertando usando typescript");
}

const appH1: HTMLElement = document.getElementById('apph1');
  appH1.innerHTML = title;

  let greeter = new Greeter("Affonso");

  const appgt: HTMLElement = document.getElementById('appgt');
  appgt.innerHTML = greeter.getGreeting();