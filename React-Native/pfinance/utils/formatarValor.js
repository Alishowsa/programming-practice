export function formatarValor(valor) {
  const sinal = valor < 0 ? '-' : '';
  const abs = Math.abs(valor).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${sinal}R$ ${abs}`;
}