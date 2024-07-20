const { generateText, checkAndGenerate, validateInput } = require('../util');

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

test('should prevent invalid input', () => {
    // !validateInput(name, true, false) ||
    // !validateInput(age, false, true)

    const emptyText = validateInput('', true, false)
    expect(emptyText).toBeFalse
})

// INTEGRATION TEST
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Ginindza', 32)

    expect(text).toBe("Ginindza (32 years old)")

    const noText1 = checkAndGenerate('', 32)
    expect(noText1).toBeUndefined;

    const undefinedText = checkAndGenerate('Ginindza', undefined) // unexpected truthy bug?
    expect(undefinedText).toBeUndefined;

    const zeroAgeText = checkAndGenerate('Ginindza', 0) // unexpected truthy bug?
    expect(zeroAgeText).toBeUndefined;

    const nullText = checkAndGenerate('Ginindza', null) // unexpected truthy bug?
    expect(nullText).toBeUndefined;
})