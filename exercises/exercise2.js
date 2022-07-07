const CountriesList = require('countries-list');

class CountryManager {
  static _instance;

  static getInstance() {
    if (!this._instance) {
      this._instance = new CountryManager();
    }

    return this._instance;
  }

  constructor() {
    this._countries = this._extractCountries(CountriesList.countries);
  }

  _extractCountries(countries) {
    return Object
      .entries(countries)
      .map((e) => ({
        country: e[0],
        languages: e[1].languages,
        langStr: e[1].languages.join(', '),
      }));
  }

  _filterByLanguage(lang, list = this._countries) {
    if (!lang) {
      return list;
    }

    return list.filter((country) => country.languages.includes(lang.toLowerCase()));
  }

  count(lang) {
    const hits = this._filterByLanguage(lang);
    return {
      filter: lang || null,
      hits,
      total: hits.length,
    };
  }

  getByLanguageAmount(lang) {
    let hits = [];
    let hitMax = 0;
    let countryMax = 0;

    this._filterByLanguage(lang).forEach((country) => {
      if (hits.length === 0) {
        hits.push(country);
        return;
      }

      hitMax = hits[0].languages.length;
      countryMax = country.languages.length;
    
      if (countryMax < hitMax) {
        return;
      }

      if (countryMax > hitMax) {
        hits = [];
      }

      hits.push(country);
    });

    return {
      filter: lang || null,
      hits,
      total: hitMax,
    };
  }
}

module.exports = CountryManager.getInstance();
