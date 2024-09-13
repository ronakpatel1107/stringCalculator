import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('should return 0', () => {
        expect(new StringCalculator('').add()).toBe(0); 
      });


})