const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let fibo = [1, 1];
let i = 0;

rl.question('Digite um número: ', (n) => {
    console.log(n)
    while (n > fibo.length) {
        fibo.push(fibo[i] + fibo[i + 1]);
        console.log(i)   
        i++;
    }
    console.log(fibo)
    console.log(`Fibonacci(${n}): ${fibo[n - 1]}`);
  rl.close();
});