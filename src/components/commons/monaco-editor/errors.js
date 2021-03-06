// NOTE Documentation pour SyntaxError
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
// NOTE Tous les messages d'erreur de JSON.parse
// https://airbrake.io/blog/javascript-error-handling/syntaxerror-json-parse-bad-parsing
const groups = [
  'SyntaxError: JSON.parse: unterminated string literal',
  'SyntaxError: JSON.parse: bad control character in string literal',
  'SyntaxError: JSON.parse: bad character in string literal',
  'SyntaxError: JSON.parse: bad Unicode escape',
  'SyntaxError: JSON.parse: bad escape character',
  'SyntaxError: JSON.parse: unterminated string',
  'SyntaxError: JSON.parse: no number after minus sign',
  'SyntaxError: JSON.parse: unexpected non-digit',
  'SyntaxError: JSON.parse: missing digits after decimal point',
  'SyntaxError: JSON.parse: unterminated fractional number',
  'SyntaxError: JSON.parse: missing digits after exponent indicator',
  'SyntaxError: JSON.parse: missing digits after exponent sign',
  'SyntaxError: JSON.parse: exponent part is missing a number',
  'SyntaxError: JSON.parse: unexpected end of data',
  'SyntaxError: JSON.parse: unexpected keyword',
  'SyntaxError: JSON.parse: unexpected character',
  'SyntaxError: JSON.parse: end of data while reading object contents',
  'SyntaxError: JSON.parse: expected property name or ‘}’',
  'SyntaxError: JSON.parse: end of data when ‘,’ or ‘]’ was expected',
  'SyntaxError: JSON.parse: expected ‘,’ or ‘]’ after array element',
  'SyntaxError: JSON.parse: end of data when property name was expected',
  'SyntaxError: JSON.parse: expected double-quoted property name',
  'SyntaxError: JSON.parse: end of data after property name when ‘:’ was expected',
  'SyntaxError: JSON.parse: expected ‘:’ after property name in object',
  'SyntaxError: JSON.parse: end of data after property value in object',
  'SyntaxError: JSON.parse: expected ‘,’ or ‘}’ after property value in object',
  'SyntaxError: JSON.parse: expected ‘,’ or ‘}’ after property-value pair in object literal',
  'SyntaxError: JSON.parse: property names must be double-quoted strings',
  'SyntaxError: JSON.parse: expected property name or ‘}’',
  'SyntaxError: JSON.parse: unexpected character',
  'SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data',
];

export default groups;
