import reverseString from '../src/reverseString'

test('Reverse String "hello" to "olleh"', () => {
	expect(reverseString('hello')).toBe('olleh');
});

test('Reverse String "world" to "dlrow"', () => {
	expect(reverseString('world')).toBe('dlrow');
});

test('Reverse String "hello" is not "dlrow"', () => {
	expect(reverseString('hello')).not.toBe('dlrow');
});
