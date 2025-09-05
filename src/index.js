module.exports = function toReadable(number) {
  const units = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  if (number === 0) {
    return 'zero';
  }
  let numberStr = number.toString();
  const numberStrLength = numberStr.length;
  let result = '';
  for (let i = 0; i < numberStrLength; i += 1) {
    if (numberStr.length === 3) {
      result += `${units[Number(numberStr[0]) - 1]} hundred `;
      if (numberStr.slice(1) === '00') break;
    }
    if (numberStr.length === 2) {
      if (numberStr[0] === '1') {
        result += `${teens[Number(numberStr) - 10]} `;
        break;
      } else if (numberStr[0] !== '0') {
        result += `${tens[Number(numberStr[0]) - 2]} `;
        if (numberStr[1] === '0') break;
      }
    }
    if (numberStr.length === 1) {
      result += `${units[Number(numberStr[0]) - 1]} `;
    }
    numberStr = numberStr.slice(1);
  }
  return result.trim();
};
