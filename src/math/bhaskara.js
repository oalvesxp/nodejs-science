/**
 * Função de Bhaskara
 * x = (-b ± √(b² - 4 * a * c)) ÷ (2 * a)
 */
function bhaskara(a, b, c){
  // Δ = b² - 4 * a * c
  const delta = b ** 2 - 4 * a * c;
  if(delta < 0) return "Sem raizes reais.."

  // x₁ = (-b + √Δ) ÷ 2 * a
  const x1 = (-b + Math.sqrt(delta)) / (2 * a)

  // x₂ = (-b - √Δ) ÷ 2 * a
  const x2 = (-b - Math.sqrt(delta)) / (2 * a)

  return {
    delta,
    x1,
    x2
  }
}

const equa01 = bhaskara(-1, 1, 12) // -x² + x + 12 = 0
const equa02 = bhaskara(1, 2, -15) // x² + 2x - 15 = 0
console.log(equa01)
console.log(equa02)