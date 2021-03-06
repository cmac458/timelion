var Promise = require('bluebird');

module.exports = {
  type: 'seriesList',
  list: [{
    data:  [
      [1000, -51],
      [2000, 17],
      [3000, 82],
      [4000, 20],
    ],
    type: 'series',
    label: 'Negative'
  }, {
    data:  [
      [1000, 100],
      [2000, 50],
      [3000, 50],
      [4000, 20],
    ],
    type: 'series',
    label: 'Nice'
  }]
};
