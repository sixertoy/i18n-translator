const EMPTY_ERROR_MSG = 'Content cannot be empty';

function validate(string, allowEmpty = true) {
  try {
    const parsed = JSON.parse(string);
    if (!allowEmpty) {
      const isEmpty = Object.keys(parsed).length <= 0;
      if (isEmpty) throw new Error(EMPTY_ERROR_MSG);
    }
    return null;
  } catch (errs) {
    // https://airbrake.io/blog/javascript-error-handling/syntaxerror-json-parse-bad-parsing
    return [errs.message];
  }
}

export default validate;
