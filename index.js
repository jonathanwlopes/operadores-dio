const checkEquality = (num1, num2) => {
  return num1 === num2
}

const sum = (num1, num2) => {
  return num1 + num2
}

const checkResult = (num1, num2) => {
  if ((!num1 && num1 !== 0) || (!num2 && num2 !== 0)) return "Defina os valores"

  const isEquality = checkEquality(num1, num2)
  const resultSum = sum(num1, num2)
  const isResultEquality = resultSum === 10 || resultSum === 20

  let result10 = "menor"
  let result20 = "menor"

  if (resultSum > 10) {
    result10 = "maior"
  }

  if (resultSum > 20) {
    result20 = "maior"
  }

  if (!isEquality) {
    if (isResultEquality) {
      return `Os números ${num1} e ${num2} não são iguais! sua soma é ${resultSum}.`
    }
    return `Os números ${num1} e ${num2} não são iguais! sua soma é ${resultSum} que é ${result10} que 10 e ${result20} que 20.`
  } else if (isEquality) {
    if (isResultEquality) {
      return `Os números ${num1} e ${num2} são iguais! sua soma é ${resultSum}.`
    }
    return `Os números ${num1} e ${num2} são iguais! sua soma é ${resultSum} que é ${result10} que 10 e ${result20} que 20.`
  }
}

const result = checkResult(10, 10)

console.log(result)
