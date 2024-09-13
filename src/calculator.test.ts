import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('input not defined', () => {
        expect(new StringCalculator('').add()).toThrow('Error'); 
      });
})