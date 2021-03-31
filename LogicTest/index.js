const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
const result = [];

const checkAnagramOfTwoWords = (word1, word2) => {
  const getWord1Length = word1.length;
  const getWord2Length = word2.length;
  if(getWord1Length !== getWord2Length) return false;
  
  for(let a = 0; a < word1.length; a++) {
    const word = word1[a];
    if(!word2.includes(word)) {
      return false;
    }
  }
  
  return true;
}

for(let i = 0; i < words.length; i++) {
  const word1 = words[i];
  const output = [word1];
  if(result.flat().includes(word1)) continue;
  
  for(let j = 0; j < words.length; j++) {
    if(j === i) continue;
    
    const word2 = words[j];
    const isAnagram = checkAnagramOfTwoWords(word1, word2);
    if(isAnagram) output.push(word2);
  }

  result.push(output);
}


// Result
console.log(result);
