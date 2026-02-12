// 1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcula a média dessas. Ao
// término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo x o resultado do
// cálculo).
function calcularMedia(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3
    console.log(`A média desse aluno é ${media}`)
    return media
}
let chamada = calcularMedia(7, 9, 5)
console.log(chamada)
///////////////////////////////////////////////////////////
// 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima pra passar, e por isso está
// de prova final. Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3
// primeiras provas + a nota da prova final. O cálculo deve ser o seguinte.

// Utilizei uma estrutura para receber o valor da primeira function e executar o novo calculo adicionando uma nota
function calcularMediaFinal(media, n4){
    let mediaFinal = (media + n4) / 2
    console.log(`A média final desse aluno é ${mediaFinal}`)
}
calcularMediaFinal(chamada, 8)
//////////////////////////////////////////////////////////////////
// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto:
// a temperatura correspondente em Farenheit é de xºF (sendo x o resultado da conversão.)

function converterFarenheit(celsius){
    let farenheit = (9/5) * celsius + 32
    console.log(`A temperatura correspondente em Farenheit é de ${farenheit}°F`)
}

converterFarenheit(60)

////////////////////////////////////////////////////////////////////
// 4 - Quando estava passeando em Nova York, Bruno se surpreendeu com uma realidade diferente da
// que conhecia. Ao tentar pagar um produto, ele percebeu que o valor cobrado era sempre um pouco
// maior do que o que estava presente na etiqueta da prateleira onde o achou. Isso acontece porque a
// etiqueta não contém o valor do imposto pago sobre o produto, que é calculado no caixa. Esse imposto
// é de 8,875% em cima do valor do produto. Faça uma função que recebe o valor do produto presente na
// etiqueta e registre na tela a frase:
// O valor a ser pago é x (sendo x o resultado do acréscimo dos impostos sobre o valor inicial).
function aplicarImposto(valor){
    let impostoAplicado  = valor * 1.08875
    console.log(`O valor a ser pago é U$${impostoAplicado}`)
}

aplicarImposto(100)
