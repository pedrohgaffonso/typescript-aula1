let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Array declaration</h1>
<h2>list: ${list}</h2>
<h2>other list: ${otherList}<?h2>
`;

let me: [string, number];

me = ['Pedro Affonso', 27];

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
<h2>Cor 2: ${color2}</h2>
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
<h2>unusable: ${myFunction}</h2>
`;
