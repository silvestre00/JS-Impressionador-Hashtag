// Parametros Opcionais e Valores padrão

function cumprimentar(saudacao, nome = "Visitante"){
    console.log(`${saudacao}, ${nome}`);
};

cumprimentar("Boa tarde")
cumprimentar("Boa noite", "Joao")