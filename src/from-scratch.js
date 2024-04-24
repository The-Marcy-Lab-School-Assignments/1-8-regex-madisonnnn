const helloWorldRegex = (str) => {
  const regex = RegExp(/(hello\s+world)/i)
  return regex.test(str)
};

const hasAVowel = (str) => {
  const regex = RegExp(/[aeiou]/i)
  return regex.test(str)
};

const hasCatsOrDogs = (str) => {
  const regex = RegExp(/cats|dogs/i)
  return regex.test(str)
};

const hasVowelStart = (str) => {
  const regex = RegExp(/^[aeiou]/i)
  return regex.test(str)
};

const hasPunctuationEnd = (str) => {
  const regex = RegExp(/[.?!]$/i)
  return regex.test(str)
};

const hasNothingOrDigits = (str) => {
  const regex = RegExp(/^$|^\d+$/i)
  return regex.test(str)
};

const hasNoFlippers = (str) => {
  const regex = RegExp(/^[^BCcDEHIKOoXxl]*$/)
  return regex.test(str)
};

const isValidEmail = (str) => {
  const regex = RegExp(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)
  return regex.test(str)
};

const isValidPhoneNumber = (str) => {
  const regex = RegExp(/^(\+\d{1,2}\s)?((\(\d{3}\))|(\d{3}))[\s.-]\d{3}[\s.-]\d{4}$/)
  return regex.test(str)
};

const matchAllNumbers = (str) => {
  const regex = /\d+/g
  return str.match(regex) || []
};

const matchAllNumbersAsNumbers = (str) => {
  const regex = /\d+/g
  return (str.match(regex) || []).map(Number)
};

const matchAllWords = (str) => {
  const regex = /[a-zA-Z']+/g
  return str.match(regex) || []
};

const replaceAllNumbers = (str) => {
  const regex = /\d+/g
  return str.replace(regex, "???")
};

const fixFileName = (str) => {
  const regex = /\s+/g
  return str.replace(regex, "_")
};

const nameRedacter = (str) => {
  const regex = /\b(?!(I|A)\b)[A-Z]+\b/g
  return str.replace(regex, "REDACTED")
};

const camelToSnakeCase = (str) => {
  const regex = /[A-Z]/g;
  const snakeCaseString = str.replace(regex, match => '_' + match.toLowerCase())
  if (snakeCaseString.charAt(0) === '_') {
    return snakeCaseString.slice(1);
}
return snakeCaseString;
};

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
