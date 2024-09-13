import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('should return 0', () => {
        expect(new StringCalculator('').add()).toBe(0); 
      });

    test('should return 1', () => {
        expect(new StringCalculator('1').add()).toBe(1); 
      });

})