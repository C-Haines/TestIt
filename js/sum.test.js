const sum = require('./sum');

test('Correction addition of 2 parameters', () => {
    expect(sum(1,2)).toEqual(3)
});