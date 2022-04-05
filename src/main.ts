/**
 * Extract the difference between two objects
 * @param previous Record<string ,any>
 * @param next Record<string, any>*/
export function extractChanges(
  previous: Record<string, any> = {},
  next: Record<string, any> = {},
  newObj = {}
) {
  const isObject = (obj = {}) =>
    obj instanceof Object && typeof obj === 'object';
  if (!isObject(previous) || !isObject(next)) {
    throw new Error('One of the arguments passed is not an object');
  }
  for (let key in previous) {
    if (key in previous && key in next) {
      const previousValue = previous[key];
      const nextValue = next[key];
      const hasChanged = previousValue !== nextValue;
      if (isObject(previousValue) && isObject(nextValue)) {
        Object.assign(
          newObj,
          extractChanges(newObj, previousValue, { [key]: nextValue })
        );
      }
      const changes = hasChanged ? { [key]: nextValue } : {};
      Object.assign(newObj, changes);
    }
  }

  return newObj;
}
const wtdiff = {
  extractChanges,
};

export default wtdiff;
