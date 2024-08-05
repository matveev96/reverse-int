module.exports = function reverse (n) {
  const str = n.toString();
  const arr = str.split('');
  arr.reverse();
  const newStr = arr.join('');
  return parseInt(newStr);
}
