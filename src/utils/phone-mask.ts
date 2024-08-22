export function phoneMask(phone: string) {
  return phone
    .replace(/\D/g, '') // Remove qualquer caractere que não seja dígito
    .replace(/(\d{2})(\d)/, '($1) $2') // Adiciona parênteses nos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, '$1-$2') // Adiciona um traço após o quinto dígito
    .replace(/(-\d{4})\d+?$/, '$1') // Limita para 4 dígitos após o traço
}
