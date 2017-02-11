class ObjectUtils {

  static has (obj, propname) {
    return Object.prototype.hasOwnProperty.call(obj, propname);
  }

  static isObject (obj) {
    return (obj && !Array.isArray(obj) && typeof obj === 'object' && typeof obj !== 'function');
  }

  static toMap (obj) {
    return new Map(Object.entries(obj));
  }

  static clone (obj) {
    let clone = {};
    clone = JSON.parse(JSON.stringify(obj));
    return clone;
  }

  static update (dest, src) {
    const updated = ObjectUtils.clone(dest);
    Object.keys(src).forEach((k) => {
      // copy object
      updated[k] = src[k];
    });
    return updated;
  }

}

export default ObjectUtils;
