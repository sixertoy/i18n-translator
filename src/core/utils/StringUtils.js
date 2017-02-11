export const SLASH = '/';
export const URL_HASH = '#';
export const QUESTION_MARK = '?';

class StringUtils {

  static ucfirst (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static removeTrailingSlash (str) {
    if (str.lastIndexOf(SLASH) !== (str.length - 1)) {
      return str;
    }
    return str.substr(0, str.length - 1);
  }

}

export default StringUtils;
