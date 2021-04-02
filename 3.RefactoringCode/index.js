const oldFunction = require('./oldFunction');

function isNotEmpty(str) {
  return str.length ? true : false;
}

function isHasOpenBracket(str) {
  return str.indexOf("(") >= 0 ? true : false;
}

function getDetailAfterOpenBracket(str) {
  const indexFirstBracketFound = str.indexOf("(");
  const wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
  const indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");

  return {
    wordsAfterFirstBracket,
    indexClosingBracketFound,
    isHasCloseBracketAfterOpenBracket: indexFirstBracketFound >= 0 && indexClosingBracketFound >= 0 ? true : false
  }
}

function findFirstStringInBracket(str) {
  if (isNotEmpty(str) && isHasOpenBracket(str)) {
    const {
      wordsAfterFirstBracket,
      indexClosingBracketFound,
      isHasCloseBracketAfterOpenBracket
    } = getDetailAfterOpenBracket(str);

    if (isHasCloseBracketAfterOpenBracket)
      return wordsAfterFirstBracket.substring(1, indexClosingBracketFound);
    else
      return ''

  } else {
    return '';
  }
}


const word = 'aku anak yang (kuat) dan sangat (berani)';
console.log('Before Refactor: ', oldFunction(word));
console.log('After Refactor: ', findFirstStringInBracket(word));