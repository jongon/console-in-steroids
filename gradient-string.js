import gradient from 'gradient-string';
import tinycolor from 'tinycolor2';

console.log(gradient('cyan', 'pink')('Hello world!'));

let coolGradient = gradient([
  tinycolor('#FFBB65'),       // tinycolor object
  {r: 0, g: 255, b: 0},       // RGB object
  {h: 240, s: 1, v: 1, a: 1}, // HSVa object
  'rgb(120, 120, 0)',         // RGB CSS string
  'gold'                      // named color
]);

let coolString = coolGradient('This is a fancy string!');
console.log(coolString);