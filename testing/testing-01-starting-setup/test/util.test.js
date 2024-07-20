const { generateText, checkAndGenerate } = require('../util');

// UNIT TEST
test('should output name and age', () => {
    const text = generateText("Botshelo", 31)
    expect(text).toBe("Botshelo (31 years old)")

    const text2 = generateText("Mphendvulo", 30)
    expect(text2).toBe("Mphendvulo (30 years old)")
});

test('should output data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(" (null years old)")
})

// INTEGRATION TEST
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Ginindza', 32)

    expect(text).toBe("Ginindza (32 years old)")

    const noText1 = checkAndGenerate('', 32)
    expect(noText1).toBeUndefined;


})