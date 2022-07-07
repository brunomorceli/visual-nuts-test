class Exercise1 {
  static _instance;

  static getInstance() {
    if (!this._instance) {
      this._instance = new Exercise1();
    }

    return this._instance;
  }

  _isDivisible(current, divBy) {
    return current % divBy === 0;
  }

  print(start = 1, end = 100, contrains = []) {
    const results = [];
  
    for (let i = start; i <= end; i++) {
      const all = contrains.find((r) => r.val === 'all');

      const match = contrains.filter((r) => r.val !== 'all' && this._isDivisible(i, r.val));

      if (match.length === 0) {
        results.push(i);
        continue;
      }

      if (all && match.length === (contrains.length - 1)) {
        if (!all.hide) {
          results.push(all.text);
        }
        continue;
      }

      if (!match[0].hide) {
        results.push(match[0].text);
      }
    }

    return results;
  }
}

module.exports = Exercise1.getInstance();
