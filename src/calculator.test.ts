import { StringCalculator } from './StringCalculator'

describe('StringCalculator',()=>{
    
    test('should return 0', () => {
        expect(new StringCalculator('').add()).toBe(0); 
      });

    test('should return 1', () => {
        expect(new StringCalculator('1').add()).toBe(1); 
      });
    
    test('should return sum of two number', () => {
        expect(new StringCalculator('1,2').add()).toBe(3); 
    });

    test('should return sum of three number', () => {
      expect(new StringCalculator('1,2,6').add()).toBe(9); 
     });

    test('should return sum of any number', () => {
      expect(new StringCalculator('1,2,1,2,1').add()).toBe(7); 
     });

     test('should handle newlines between numbers', () => {
      expect(new StringCalculator('1\n2,6').add()).toBe(9); 
     });

     test('should handle newlines between numbers', () => {
      expect(new StringCalculator('1,2\n4,5').add()).toBe(12); 
     });

     test('should handle custom delimiters', () => {
      expect(new StringCalculator('//;\n1;2').add()).toBe(3);
    });
})