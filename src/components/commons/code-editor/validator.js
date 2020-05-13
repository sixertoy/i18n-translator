function validate(string, allowEmpty = true) {
  try {
    const parsed = JSON.parse(string);
    if (allowEmpty) return true;
    // NOTE do not validate if JSON is empty
    return Object.keys(parsed).length > 0;
  } catch (err) {
    // https://airbrake.io/blog/javascript-error-handling/syntaxerror-json-parse-bad-parsing
    if (err instanceof SyntaxError) {
      console.log('err', err);
      const line = err.lineNumber;
      const position = err.columnNumber;
      console.log('line', line);
      console.log('position', position);
      console.log('position', err.stack);
    }
    // else {
    //     printError(e, false);
    // }
    return false;
  }
}

export default validate;
