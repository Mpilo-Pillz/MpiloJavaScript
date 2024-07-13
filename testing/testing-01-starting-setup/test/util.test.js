const { generateText } = require('../util');

test('should output name and age', () => {
    const text = generateText("Botshelo", 31)
    expect(text).toBe("Botshelo (31 years old)")
});