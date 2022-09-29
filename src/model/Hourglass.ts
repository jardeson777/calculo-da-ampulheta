import Utils from "./Utils";

class Hourglass {
    private hourglass: string = '';
    private valueInput: number;
    private middleHourglassCount: number;

    constructor (valueInput: number) {
        this.valueInput = valueInput;
        this.middleHourglassCount = Math.ceil(valueInput/2)-2;
    }

    private baselineHandle = (count: number, caracter: string) => {
        return `${caracter.repeat(count)}`;
    }
    
    private lineHourglass =(quantidadeParaRemover: number, linha: string, caracter: string) => {
        return Utils.replaceAtTwoSides(linha, quantidadeParaRemover, caracter);
    }
    
    private hourglassFull = (position: 'top' | 'bottom') => {
        let line = this.baselineHandle(this.valueInput-2, "#");
    
        if(position === 'top') {
            for (let i = 0; i<this.middleHourglassCount; i++){
                if(i == 0) {
                    this.hourglass += this.baselineHandle(this.valueInput, "#") + "\n";
                }
                
                line =  this.lineHourglass(i, line, " ") ;
                this.hourglass += "#" + line + "#" + "\n";
            }
            return;
        }
        line = this.baselineHandle(this.valueInput-2, " ");
        for (let i = 0; i<this.middleHourglassCount; i++){
            if(i == 0) {
                this.hourglass += this.baselineHandle(this.valueInput, "#") + "\n";
            }
            
            line =  this.lineHourglass(i, line, "#") ;
            this.hourglass += "#" + line + "#" + "\n";

            line = this.baselineHandle(this.valueInput-2, " ");
        }
    }
    
    private hourglassEmpty = (position: 'top' | 'bottom') => {
        let line = this.baselineHandle(this.valueInput-2, " ");
    
        for (let i = this.middleHourglassCount; i >= 0; i--){
            line =  this.lineHourglass(i, line, "#");
            this.hourglass += "#" + line + "#" + "\n";
            
            if(i == 0) {
                this.hourglass += this.baselineHandle(this.valueInput, "#") + "\n";
            }
            if(position === 'bottom') {
                line = this.baselineHandle(this.valueInput-2, " ");
            }
        }
    }

    public getHourglass = (positionFull: 'top' | 'bottom') => {
        if(positionFull === 'top') {
            this.hourglassFull('top');
            this.hourglassEmpty('bottom');
            return this.hourglass;
        }

        this.hourglassFull('bottom');
        this.hourglassEmpty('top');
        return this.hourglass;
    }
}

export default Hourglass;