import caesarCipher from '../src/caesarCipher';

test('Caesar Cipher "hello" to "khoor" with shift 3', () => {
	expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('Caesar Cipher "world" to "zruog" with shift 3', () => {
	expect(caesarCipher('world', 3)).toBe('zruog');
});

test('Caesar Cipher "hello." is not "zruog" with shift 3', () => {
	expect(caesarCipher('hello.', 3)).not.toBe('zruog');
});