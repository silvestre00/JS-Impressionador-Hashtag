// Existem 3 tipos principais de Escopo:
// Escopo Global - Local (Função) - Bloco

// Consigo utilizar essa variavel em qualquer lugar do meu código;
// Escopo Global
let global = "Sou do escopo Global";


function mensagem() {
    // Pode ser utilizada somente dentro desta função, escopo Local
    let local = "Sou local da função"; 
    console.log(global);
};

mensagem();
console.log(global);
// console.log(local); // Apresenta erro de referencia

if (true){
    // Faz parte somente deste bloco condicional, pode ser utilizado somente nesse bloco.
    // Escopo Bloco
    let bloco = "Sou do bloco do IF";
    console.log(global);
};

// console.log(bloco); // Apresenta erro de referencia

