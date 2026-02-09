//Chamadas de Funções: executar uma função
// utilizamos o function para criarmos uma função
// Após o function definimos o nome da function para podermos executa-la
// Entre () definimos parametros (caso necessário);
// Por fim abrimos as chaves e escrevemos o que a function vai fazer
// Se a função tiver parametros e não repassarmos quando formos executar, o JS retorna como undefined
// Estrutura: function name(parametros){Código};
function exibirDetalhes(nome, curso){
    console.log(`Professor: ${nome} \nCurso: ${curso}`);
};

exibirDetalhes('Lucas', 'Python'); // Retorna a função corretamente.
exibirDetalhes(); //Retorna undefined
