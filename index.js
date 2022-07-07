const exercise1 = require('./exercises/exercise1');
const exercise2 = require('./exercises/exercise2');

console.log(`
■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ 
Exercise 1
■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ 

`);

console.log('----------------------------------------------------------------------------');
console.log('■ Replace divisible by 3 for "Visual" word, divisibles by 5 for "Nuts" word and divisible by both for "Visual Nuts" words:', exercise1.print(
  1,
  100,
  [
    {val: 'all', text: 'Visual Nuts' },
    {val: 3, text: 'Visual' },
    {val: 5, text: 'Nuts'},
  ]
));

console.log('----------------------------------------------------------------------------');
console.log('■ Replace divisible by 6 for "Hello" word, divisible by 11 for "World" word from 200 to 256', exercise1.print(
  200,
  256,
  [
    {val: 6, text: 'Hello' },
    {val: 11, text: 'World'},
  ]
));

console.log('----------------------------------------------------------------------------');
console.log('■ Replace divisible by 7 for "Seven" word, and hide all numbers divisible by 3 from 1 to 100', exercise1.print(
  1,
  100,
  [
    {val: 7, text: 'Seven' },
    {val: 3, hide: true },
  ]
));

console.log('----------------------------------------------------------------------------');
console.log('■ Print only numbers from 400 to 450 ', exercise1.print(400, 450));

console.log(`
■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ 
Exercise 2
■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ 

`);

console.log('----------------------------------------------------------------------------');
console.log('■ Number of countries in the world:', exercise2.count().total);

console.log('----------------------------------------------------------------------------');
console.log('■ Number of countries in the world that speak Portuguese', exercise2.count('pt'));

console.log('----------------------------------------------------------------------------');
console.log('■ Countries speaking the most languages in the world', exercise2.getByLanguageAmount());

console.log('----------------------------------------------------------------------------');
console.log('■ Countries speaking the most languages in the world that have Germany as their official language:', exercise2.getByLanguageAmount('de'));

console.log('----------------------------------------------------------------------------');
console.log('■ Get most spoken language:', exercise2.getMostSpoken());
console.log('');

console.log('----------------------------------------------------------------------------');
console.log('■ Get the 3 most spoken languages:', exercise2.getMostSpoken(3));
