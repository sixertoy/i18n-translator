// import uniq from 'lodash.uniq';
// const DUPLICATED_ERROR_MSG = 'Content cannot be empty';
const EMPTY_ERROR_MSG = 'Content cannot be empty';

// function checkIfNoKeysDuplicated(parsed) {
//   const base = Object.keys(parsed);
//   const compare = Object.keys(parsed);
//   const uniques = uniq(compare);
//   return uniques.length === base.length;
// }

function validate(string, allowEmpty = true) {
  try {
    const parsed = JSON.parse(string);

    if (!allowEmpty) {
      const isEmpty = Object.keys(parsed).length <= 0;
      if (isEmpty) throw new Error(EMPTY_ERROR_MSG);
    }

    // const noDuplicatedKeys = checkIfNoKeysDuplicated(parsed);
    // if (!noDuplicatedKeys) {
    //   throw new Error(DUPLICATED_ERROR_MSG);
    // }

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
