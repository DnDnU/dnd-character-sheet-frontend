import ModifierCalculator from './modifier-calculator';


describe('ModifierCalculator', () => {
    describe('calculateModifier', () => {
        test('Should return negative 2 when given 6', () => {
            // Arrange
            let testVal = 6;
            //Act
            let modifier = ModifierCalculator.calculateModifier(testVal);
            //Assert
            expect(modifier).toEqual(-2);
        })
    })
})