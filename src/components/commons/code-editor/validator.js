const EMPTY_ERROR_MSG = 'Content cannot be empty';

function validate(string, allowEmpty = true) {
  try {
    const parsed = JSON.parse(string);
    if (allowEmpty) return null;
    const isEmpty = Object.keys(parsed).length <= 0;
    if (isEmpty) throw new Error(EMPTY_ERROR_MSG);
    return null;
  } catch (err) {
    // https://airbrake.io/blog/javascript-error-handling/syntaxerror-json-parse-bad-parsing
    // if (err instanceof SyntaxError) {
    // }
    // else {
    //     printError(e, false);
    // }
    return [err.message];
  }
}

export default validate;
