const dados = require('/root/teste/dados.json');

// var
let minFaturamento = Infinity;
let maxFaturamento = -Infinity;
let totalFaturamento = 0;
let countSuperiorMedia = 0;

// loop
dados.forEach((item) => {
  // verifica valor menor (maior que 0)
  if (item.valor > 0 && item.valor < minFaturamento) {
    minFaturamento = item.valor;
  }

  // verifica o valor maior
  if (item.valor > maxFaturamento) {
    maxFaturamento = item.valor;
  }

  // add valor ao total
  totalFaturamento += item.valor;
});

// calcula fat diário
const mediaFaturamento = totalFaturamento / dados.length;

// n de dias com maior valor
dados.forEach((item) => {
  if (item.valor > mediaFaturamento) {
    countSuperiorMedia++;
  }
});

// resposta
console.log(`Menor valor de faturamento diário: R$${minFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento diário: R$${maxFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento diário superior à média: ${countSuperiorMedia}`);