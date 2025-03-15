const isValidJSON = str => {
  try {
    const newStr = str.replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll('**Transação Registrada com Sucesso**', '')
    return JSON.parse(newStr)
  } catch (e) {
    return false
  }
}

module.exports = isValidJSON
