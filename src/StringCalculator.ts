

export class StringCalculator{
        public input: string;

    constructor(input:string){
        this.input = input;
    }

    public add (){
        if (this.input === '') return 0
        const numberArray = this.splitBydelimiter(this.input);
        return numberArray.reduce((sum, num) => sum + num, 0);
    }

    protected splitBydelimiter(number:string): number[] {
        
        let delimiter = /[\n,;]/; 
        if (number.startsWith('//')) {
            const delimiterEndIndex = number.indexOf('\n');
            delimiter = new RegExp(number.substring(2, delimiterEndIndex).trim(), 'g');
            number = number.substring(delimiterEndIndex + 1);
        }

        return number
            .split(delimiter)
            .map(num => parseInt(num, 10))
            .filter(num => !isNaN(num));
    }
}