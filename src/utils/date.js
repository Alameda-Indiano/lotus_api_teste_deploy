const formatDate = (date, type) => {

  const newDate = date ? new Date(date) : new Date()

  if (!date) newDate.setHours(newDate.getHours() - 3);

  const types = {
    'YYYY/M/DD': newDate.toLocaleDateString('zh-Hans-CN'),
    'DD/MM/YYYY': newDate.toLocaleDateString('pt-BR'),
    'DD-MM-YYYY': newDate.toLocaleDateString('pt-BR').replaceAll('/', '-'),
    'YYYY/MM/DD HH:MM:SS': `${newDate.toLocaleDateString('en-CA')} ${newDate.toLocaleTimeString('en-GB', { hour12: false })}`,
  }

  if (type) return types[type]
}

module.exports = formatDate
