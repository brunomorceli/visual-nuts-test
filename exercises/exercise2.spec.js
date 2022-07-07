const CountriesList = require('countries-list');
const exercise2 = require("./exercise2");


function checkResult(result, total, hits, filter = null) {
  expect(result).toBeDefined();

  expect(result.filter).toBeDefined();
  expect(result.filter).toBe(filter);

  expect(result.hits).toBeDefined();
  expect(result.hits.length).toBe(hits);

  expect(result.total).toBeDefined();
  expect(result.total).toBe(total);
}

describe('Exercise 2 - Unit tests', () => {
    test('Should be defined', () => {
      expect(exercise2).toBeDefined();
    });

    test('Should return all countries', () => {
      const total = Object.keys(CountriesList.countries).length;
      const result = exercise2.count();

      checkResult(result, total, total, null);
    });
    
    test('Should return the same structure', () => {
      const total = Object.keys(CountriesList.countries).length;
      const result = exercise2.count();
      
      checkResult(result, total, total, null);

      result.hits.forEach((language) => {
        expect(language).toBeDefined();
        expect(language.country).toBeDefined();
        expect(language.country.length).toBe(2);
        expect(language.languages).toBeDefined();
        expect(language.languages.length).toBeGreaterThanOrEqual(0);
      })
    });

    test('Should return only countries that speak Portuguese("pt")', () => {
      const filter = 'pt';
      const total = Object.entries(CountriesList.countries).filter((e) => e[1].languages.includes(filter)).length;
      const result = exercise2.count(filter);
      
      checkResult(result, total, total, filter);
    });
  
    test('Should return only countries that speak Spanish ("es")', () => {
      const filter = 'es';
      const filtered = Object.entries(CountriesList.countries).filter((e) => e[1].languages.includes(filter));
      const total = Math.max(...filtered.map((c) => c[1].languages.length));
      const hits = filtered.filter((e) => e[1].languages.length === total).length;
      
      const result = exercise2.getByLanguageAmount(filter);

      checkResult(result, total, hits, filter);
    });
});