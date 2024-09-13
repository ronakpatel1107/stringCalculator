import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('input not defined', () => {
        expect(new StringCalculator().add()).toBe(0); 
      });
})