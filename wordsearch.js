// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally(completed) and vertically
// Return true if the word is found, and return false if the word is not found


const wordSearch = (letters, word) => { 
 
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word)) return true
  }

  //transpose the matrix and run loop
  let transposedLetters = transpose(letters)
  const VerticalJoin = transposedLetters.map(ls => ls.join(''))
  for (l of VerticalJoin) {
      if (l.includes(word)) return true
}
//if not found return false
return false;

};

const transpose = function(matrix) {
  // matrix function from yesterday
  const matrixOut = [];
  
  //create empty matrix to store value
  
  for (let elem of matrix[0]) {
    matrixOut.push([]);
  }
//change row values of original
  for (const row of matrix) {
    row.forEach((value, index) => {
      // console.log(`matrix: ${matrix}, row ${row}`)
      matrixOut[index].push(value);
    });
  }
  
  // console.log("MatrixOut:",matrixOut)
  return matrixOut;
};

module.exports = wordSearch