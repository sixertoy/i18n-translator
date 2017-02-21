
/**
 * [alphasort description]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {Array}
 */
export const alphasort = (a, b) => (a < b ? -1 : 1);

/**
 * [deduplicate description]
 * @param  {[type]} el  [description]
 * @param  {[type]} i   [description]
 * @param  {[type]} arr [description]
 * @return {Array}
 */
export const deduplicate = (el, i, arr) => (arr.indexOf(el) === i);

export default {};
