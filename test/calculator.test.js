import Calculator from '../src/calculator';

test('Add 1 + 2 to equal 3', () => {
	expect(Calculator.add(1, 2)).toBe(3);
});
test('Subtract 2 - 1 to equal 1', () => {
	expect(Calculator.subtract(2, 1)).toBe(1);
});
test('Multiply 2 * 3 to equal 6', () => {
	expect(Calculator.multiply(2, 3)).toBe(6);
});
test('Divide 6 / 3 to equal 2', () => {
	expect(Calculator.divide(6, 3)).toBe(2);
});
