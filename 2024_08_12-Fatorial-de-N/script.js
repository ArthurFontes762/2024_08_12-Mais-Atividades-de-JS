function fatorial(N) {
    let resultado = 1;
    for (let i = 1; i <= N; i++) {
        resultado *= i; // Pode usar resultado = resultado * i; também
        console.log(i * " " * resultado);
    }
    return resultado;
}

const N = 5;
console.log(`O fatorial de ${N} é ${fatorial(N)}`);