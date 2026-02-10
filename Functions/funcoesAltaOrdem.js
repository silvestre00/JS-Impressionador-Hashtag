// Funções de Alta Ordem:
// Recebem uma ou mais funções como argumento
function executarOperacao(x, operacao){ //Função de Alta ordem
    return operacao(x);
};

function expoenciacao(x){
    return x * x;
};

let chamada = executarOperacao(4, expoenciacao);
console.log(chamada);



// Recebem uma função como resultado
function incrementar (i) {
    return function(numero) {
        return numero + i
    };
};

const chamadaIncrementar = incrementar(4)
console.log(chamadaIncrementar(4))