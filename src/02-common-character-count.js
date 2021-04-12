/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = Array.from(Array(26), () => 0);
  const arr2 = Array.from(Array(26), () => 0);
  for (let i = 0; i < s1.length; i++) {
    arr1[s1.charCodeAt(i) - 97] += 1;
  }
  for (let j = 0; j < s2.length; j++) {
    arr2[s2.charCodeAt(j) - 97] += 1;
  }
  let result = 0;
  for (let k = 0; k < arr1.length; k++) {
    result += Math.min(arr1[k], arr2[k]);
  }
  return result;
}

module.exports = getCommonCharacterCount;
