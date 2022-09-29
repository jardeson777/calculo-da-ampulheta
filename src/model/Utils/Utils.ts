class Utils {
    replaceAt = (base: string, index: number, replacement: string) => {
        if (index >= base.length) {
            return base.valueOf();
        }
    
        return base.substring(0, index) + replacement + base.substring(index + 1);
    }
    replaceAtTwoSides = (base: string, index: number, replacement: string) => {
        if (index >= base.length) {
            return base.valueOf();
        }
    
        const replaceAtOneSide = this.replaceAt(base, index, replacement);
        return this.replaceAt(replaceAtOneSide, replaceAtOneSide.length - 1 - index, replacement);
    }
}

export default new Utils();