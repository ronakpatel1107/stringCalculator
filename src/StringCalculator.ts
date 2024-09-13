

export class StringCalculator{
        public input: string;

    constructor(input:string){
        this.input = input;
    }

    public add (){
        if (this.input === '') return 0
        const numberArray = this.input.split(',');
        return numberArray.reduce((sum, num) => sum + parseInt(num), 0);
    }
}