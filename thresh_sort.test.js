const thresh_sort = require('./thresh_sort');

test('Positive values and threshold in the middle', () => {
    expect(thresh_sort([1,2,3,4,5], 3)).toEqual([3,3,3,2,1]);
});

test('Positive values, threshold above', () => {
    expect(thresh_sort([1,2,3,4,5], 10)).toEqual([5,4,3,2,1]);
});

test('Threshold below positive values, and threshold of 0', () => {
    expect(thresh_sort([1,2,3,4,5], 0)).toEqual([0,0,0,0,0]);
});

test('Negative values, positive threshold', () => {
    expect(thresh_sort([-1,-2,-3,-4,-5], 5)).toEqual([-1,-2,-3,-4,-5]);
});

test('Positive values, negative threshold', () => {
    expect(thresh_sort([1,2,3,4,5], -5)).toEqual([-5,-5,-5,-5,-5]);
});

test('Empty array', () => {
    expect(thresh_sort([], 1)).toEqual([]);
});