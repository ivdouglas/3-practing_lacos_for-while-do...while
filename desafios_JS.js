// 1. Contador de 1 a 10 

for (let i = 1; i <= 10; i++) { 

console.log(i); 

} 

 
console.log('');
// 2. Soma de 1 a 100 

let soma = 0; 

for (let i = 1; i <= 100; i++) { 

soma += i; 

} 

console.log("Soma de 1 a 100: " + soma); 

 
console.log('');
// 3. Tabuada personalizada 

let numeroTabuada = 7; 

for (let i = 1; i <= 10; i++) { 

console.log(numeroTabuada + " x " + i + " = " + (numeroTabuada * i)); 

} 

 
console.log('');
// 4. Contagem regressiva com while 

let contagem = 10; 

while (contagem >= 0) { 

console.log(contagem); 

contagem--; 

} 

console.log("Contagem finalizada!"); 

 
console.log('');
// 5. Receber números até digitar 0 (simulado com array) 

let entradas = [5, 10, 3, 0]; 

let contador = 0; 

let index = 0; 

do { 

if (entradas[index] !== 0) { 

contador++; 

} 

index++; 

} while (entradas[index - 1] !== 0); 

console.log("Total de números digitados: " + contador); 

 
console.log('');
// 6. Jogo do número secreto 

let numeroSecreto = 7; 

let tentativas = [3, 5, 7]; 

for (let i = 0; i < 3; i++) { 

if (tentativas[i] === numeroSecreto) { 

console.log("Acertou!"); 

break; 

} else { 

console.log("Tente novamente."); 

} 

} 

 
console.log('');
// 7. Idade ao longo dos anos 

let anoNascimento = 2000; 

let anoAtual = 2025; 

for (let ano = anoNascimento; ano <= anoAtual; ano++) { 

console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos."); 

} 

 
console.log('');
// 8. Listando números pares entre 1 e 50 

for (let i = 1; i <= 50; i++) { 

if (i % 2 === 0) { 

console.log(i); 

} 

} 

 
console.log('');
// 9. Contar múltiplos de 3 entre 1 e 100 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

 
console.log('');
// 10. Menu com repetição 

let opcoes = [1, 2, 3]; 

let indice = 0; 

let opcao; 

do { 

opcao = opcoes[indice]; 

if (opcao === 1) { 

console.log("Ver saldo"); 

} else if (opcao === 2) { 

console.log("Fazer depósito"); 

} else if (opcao === 3) { 

console.log("Sair"); 

} 

indice++; 

} while (opcao !== 3); 

 