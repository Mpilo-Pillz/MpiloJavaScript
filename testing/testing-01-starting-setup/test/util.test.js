const { generateText } = require('../util');

test('should output name and age', () => {
    const text = generateText("Botshelo", 31)
    expect(text).toBe("Botshelo (31 years old)")
});

test('should output data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(" (null years old)")
})