const faturamento = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'Outros', valor: 19849.53 }
];

// Calcula o valor total do faturamento
const valorTotal = faturamento.reduce((total, item) => total + item.valor, 0);

// Calcula o percentual de representação de cada estado
const percentuais = faturamento.map(item => {
  const percentual = (item.valor / valorTotal) * 100;
  return { estado: item.estado, percentual: percentual };
});

console.log(percentuais);