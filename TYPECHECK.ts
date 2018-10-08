function typeCheck(data: any, type: string) {
  const dataType = Object.prototype.toString.call(data).slice(8, -1);
  if (dataType !== type) {
    throw new TypeError (`Expected ${type}, got ${dataType}`);
  }
}

export default typeCheck;
