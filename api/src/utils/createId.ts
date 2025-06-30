function zeroFirst(num: number) {
  return num < 10 ? "0" + num.toString() : num.toString();
}
function createId() {
  const date = new Date();
  // data - hora - milisegundos
  return `${zeroFirst(date.getDate())}${zeroFirst(date.getHours())}${zeroFirst(date.getMilliseconds())}`;
}

export {createId}