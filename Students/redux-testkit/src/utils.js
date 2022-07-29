export function deepEqual(x, y) {
  if ((typeof x === "object" && x !== null) && (typeof y === "object" && y !== null)) {
    if (Object.keys(x).length !== Object.keys(y).length) {
      return false;
    }

    for (const prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  } else if (x !== y) {
    return false;
  } else {
    return true;
  }
}

export function isPromise(obj) {
  return Promise.resolve(obj) === obj;
}
