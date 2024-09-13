
describe('StringCalculator',()=>{
    
    test('Class not defined', () => {
        expect(new StringCalculator('').add()).toThrow('Error'); 
      });
})