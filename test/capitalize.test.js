// import capitalize from './capitalize.js';

import capitalize from '../src/capitalize.js';

test('Capitalize "hello" to "Hello"', () => {
	expect(capitalize('hello')).toBe('Hello');
});
test('Capitalize "world" to "World"', () => {
	expect(capitalize('world')).toBe('World');
});
test('Capitalize "hello" is not "World"', () => {
	expect(capitalize('hello')).not.toBe('World');
});