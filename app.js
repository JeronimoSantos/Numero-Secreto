// alert = para exibir uma mensagem
alert(" Bem vindo heroi ao desafio do número secreto! ")

// let = para guarda uma informação na memória
// Os nomes das variáveis presição ser claros para saber o que está armazenado
// Math.random() = para criar números aleatórios
let numeroMaximo = 2000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let tentativa 
let veses = 1

// enquanto
// while = é uma estrutura de loop
while(tentativa != numeroSecreto) {
    tentativa = prompt("Qual é o número secreto de 0 a " + numeroMaximo)

// se
// if/else = é uma estrutura de condição     
    if (numeroSecreto == tentativa) {
        break
    } else {
        if (tentativa > numeroSecreto){
            alert(`O número secreto é menor que ${tentativa}`)
        } else {
            alert(`O número secreto é maior que ${tentativa}`)
        }
        // veses = veses + 1
        veses++
    }
}
// Operadores = != == > ? : 
let palavraTentativa = veses > 1 ? "tentativas" : "tentativa"
alert(`Parabens voce é menos burro do que parece, o número secreto é ${numeroSecreto} com ${veses} ${palavraTentativa}`)