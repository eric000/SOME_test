function flatten(arr: any[], res: any[]): any[] {
  arr.forEach((element) => {
    Array.isArray(element)
      ? flatten(element, res) : res.push(element);
  });
  return res;
}

export default function aa(arr) { return flatten(arr, []); }
