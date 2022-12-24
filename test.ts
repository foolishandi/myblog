var objectEq2 = (obj1, obj2) => {
  if (
    Object.prototype.toString.call(obj1) !==
    Object.prototype.toString.call(obj2)
  )
    return false;
  if (Array.isArray(obj1) || typeof obj1 === "object") {
    if (
      Array.isArray(obj1) &&
      Array.isArray(obj2) &&
      obj1.length < obj2.length
    ) {
      [obj1, obj2] = [obj2, obj1];
    } else if (
      typeof obj1 === "object" &&
      typeof obj2 === "object" &&
      Object.keys(obj1).length < Object.keys(obj2).length
    ) {
      [obj1, obj2] = [obj2, obj1];
    }
    for (const [key1, value1] of Object.entries(obj1)) {
      if (typeof obj2[key1] === "undefined" && !objectEq2(value1, obj2[key1])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
};
