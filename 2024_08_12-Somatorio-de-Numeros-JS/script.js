// Definição de Valor
const maxValue = 10;

// Inicialização de variável 
let soma = 0

// O loop percorrendo de 0 até o valor máximo
for (let i = 0; i <= maxValue; i++) {
    soma += i; // Aqui irá adicionar o valor i à soma
    // Pode usar tanto soma = soma+i quanto o outro mostrado acima.
    console.log(i + " " + soma);
}
console.log(soma);

// Resultado
console.log(`O somatório dos números de 0 até ${maxValue} é ${soma}`);