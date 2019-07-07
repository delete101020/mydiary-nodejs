module.exports = {
  removeQuotationAndBracket(string) {
    let reg = /[\]['"]/g;
    return string.replace(reg, '');
  },

  removeFirstAndLast(string) {
    return string.slice(1, -1);
  }
};