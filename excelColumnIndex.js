/* Convert Excel column names to index */
function solution(columnName) {
  var result = 0;
  for (var i = 0; i < columnName.length; i++) {
  	/* console.log(columnName.charCodeAt(i)) */;
    /* console.log(result) */
    result = result * 26 + columnName.charCodeAt(i) - 64;
  }
  return result - 1;
}

/* Test Cases */
console.log(solution("A"));
console.log(solution("AB"));
console.log(solution("AAB"));
