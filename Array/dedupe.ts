import TYPECHECK from "./../TYPECHECK.js";
function dedupe(arr: any[], func: any = JSON.stringify) {
  TYPECHECK(arr, "Array");
  const lookup = {};
  const root = [];
  arr.forEach((item, index) => {
    const itemToString = func(item);
    if (!lookup[itemToString]) {
      lookup[itemToString] = true;
      root.push(item);
    }
  });
  return root;
}
export default dedupe;
