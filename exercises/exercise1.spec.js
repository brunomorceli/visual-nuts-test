const Exercise1 = require('./exercise1');

describe('Exercise 1 - Unit tests', () => {
    let start;
    let end;
    let times;
    let constrains;
    
    beforeEach(() => {
      start = 0;
      end = 100;
      times = end - start + 1;
      constrains = [];
    });

    test('Should be defined', () => {
      expect(Exercise1).toBeDefined();
    });

    test(`Should return same results times`, () => {
      const result = Exercise1.print(start, end, constrains);

      expect(result).toBeDefined();
      expect(result.length).toBe(times);
    });

    test('Should return all divisibles by 3 as "three" string', () => {
      constrains = [{ val: 3, text: 'three' }];

      const result = Exercise1.print(start, end, constrains);

      expect(result).toBeDefined();
      expect(result.length).toBe(times);
      
      for (let i in result) {
        if (i % 3 === 0) {
          expect(result[i]).toBe(constrains[0].text);
          continue;
        }

        expect(result[i]).toBeGreaterThan(-1);
      }
    });
  
    test('Should hide any number divisible by 5', () => {
      constrains = [{ val: 5, hide: true }];

      const result = Exercise1.print(start, end, constrains);

      expect(result).toBeDefined();
      expect(result.length).toBeGreaterThan(0);

      for (let i in result) {
        expect(result[i] % 5).not.toBe(0);
      }
    });
  
    test('Should be divisible by 2 and 3 or both and presents the right text', () => {
      constrains = [
        { val: 2, text: 'even' },
        { val: 7, text: 'seven' },
        { val: 'all', text: 'all' },
      ];

      const result = Exercise1.print(start, end, constrains);

      expect(result).toBeDefined();
      expect(result.length).toBe(times);

      for (let i in result) {
        const divisibleBy2 = i % constrains[0].val === 0;
        const divisibleBy7 = i % constrains[1].val === 0;
        const divisibleByBoth = divisibleBy2 && divisibleBy7;

        if (divisibleByBoth) {
          expect(result[i]).toBe(constrains[2].text);
          continue;
        }
        
        if (divisibleBy2) {
          expect(result[i]).toBe(constrains[0].text);
          continue;
        }

        if (divisibleBy7) {
          expect(result[i]).toBe(constrains[1].text);
          continue;
        }
      }
    });
});