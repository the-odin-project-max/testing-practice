import analyseArray from "../src/analyzeArray";

test("Analyze [1, 2, 3, 6, 12, 24]", () => {
	expect(analyseArray([1, 2, 3, 6, 12, 24])).toEqual({
		average: 8,
		min: 1,
		max: 24,
		length: 6,
	});
});

