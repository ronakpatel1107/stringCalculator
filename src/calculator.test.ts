import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('should return undefined', () => {
        expect(new StringCalculator('').add()).toBe(0); 
      });


})