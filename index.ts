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