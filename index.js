String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
}
String.prototype.replaceAtTwoSides = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    const replaceAtOneSide = this.replaceAt(index, replacement);
    return replaceAtOneSide.replaceAt(replaceAtOneSide.length - 1 - index, replacement);
}

function montaLinhaBase (count, caracter) {
    return `${caracter.repeat(count)}`;
}

function montaLinhaDaAmpulheta(quantidadeParaRemover, linha) {
    return linha.replaceAtTwoSides(quantidadeParaRemover, " ");
}

function montaLinhaDaAmpulhetaVazia(quantidadeParaRemover, linha) {
    return linha.replaceAtTwoSides(quantidadeParaRemover, "#");
}

const valorInput = 20;

let linha = montaLinhaBase(valorInput-2, "#");
let ampulheta = '';

for (let i = 0; i<Math.ceil(valorInput/2)-2; i++){
    if(i == 0) {
        ampulheta += montaLinhaBase(valorInput, "#") + "\n";
    }
    
    linha =  montaLinhaDaAmpulheta(i, linha) ;
    ampulheta += "#" + linha + "#" + "\n";
}

linha = montaLinhaBase(valorInput-2, " ");

for (let i = Math.ceil(valorInput/2)-2; i > 0; i--){
    linha =  montaLinhaDaAmpulhetaVazia(i, linha);
    ampulheta += "#" + linha + "#" + "\n";
    
    if(i == 1) {
        ampulheta += montaLinhaBase(valorInput, "#") + "\n";
    }
    linha = montaLinhaBase(valorInput-2, " ");
}

console.log(ampulheta);